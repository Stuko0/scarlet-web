// utils/globalForestWatchAPI.js
// API oficial de Global Forest Watch - Datos de incendios forestales

export class GlobalForestWatchAPI {
    constructor() {
        this.baseURL = 'https://data-api.globalforestwatch.org';
        this.country = 'BOL'; // Bolivia
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-api-key': '<YOUR_API_KEY>'
        };
    }

    // Método para hacer peticiones con manejo de errores
    async makeRequest(url, options = {}) {
        try {
            console.log('Haciendo petición a:', url);
            const response = await fetch(url, {
                headers: this.headers,
                ...options
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Error en petición:', error);
            throw error;
        }
    }

    // 1. Obtener datos de alertas de incendios VIIRS
    async getFireAlerts(startDate = '2020-01-01', endDate = '2024-12-31') {
        const url = `${this.baseURL}/dataset/viirs_fire_alerts/latest/query`;
        
        const body = {
            sql: `SELECT 
                confidence,
                latitude,
                longitude,
                alert_date,
                bright_ti4,
                bright_ti5
            FROM table 
            WHERE iso = '${this.country}'
            AND alert_date >= '${startDate}'
            AND alert_date <= '${endDate}'
            ORDER BY alert_date DESC
            LIMIT 10000`
        };

        return this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    }

    // 2. Obtener pérdida de cobertura arbórea relacionada con incendios
    async getTreeCoverLossFromFires(startYear = 2001, endYear = 2023) {
        const url = `${this.baseURL}/dataset/umd_tree_cover_loss/latest/query`;
        
        const body = {
            sql: `SELECT 
                umd_tree_cover_loss_from__year as year,
                SUM(area__ha) as loss_ha
            FROM table 
            WHERE iso = '${this.country}'
            AND umd_tree_cover_loss_from__year >= ${startYear}
            AND umd_tree_cover_loss_from__year <= ${endYear}
            GROUP BY umd_tree_cover_loss_from__year
            ORDER BY umd_tree_cover_loss_from__year`
        };

        return this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    }

    // 3. Obtener emisiones de CO2 por incendios
    async getCO2EmissionsFromFires(startYear = 2001, endYear = 2023) {
        const url = `${this.baseURL}/dataset/gfw_forest_carbon_gross_emissions/latest/query`;
        
        const body = {
            sql: `SELECT 
                year,
                SUM(co2_emissions__Mg) as total_co2_mg,
                SUM(co2_emissions_from_fires__Mg) as fire_co2_mg
            FROM table 
            WHERE iso = '${this.country}'
            AND year >= ${startYear}
            AND year <= ${endYear}
            GROUP BY year
            ORDER BY year`
        };

        return this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    }

    // 4. Obtener datos de deforestación por incendios
    async getDeforestationByFires() {
        const url = `${this.baseURL}/dataset/umd_tree_cover_loss_drivers/latest/query`;
        
        const body = {
            sql: `SELECT 
                driver,
                SUM(area__ha) as area_ha
            FROM table 
            WHERE iso = '${this.country}'
            AND driver LIKE '%fire%'
            GROUP BY driver
            ORDER BY area_ha DESC`
        };

        return this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    }

    // 5. Obtener datos estadísticos consolidados
    async getFireStatistics() {
        try {
            const [fireAlerts, treeLoss, emissions, deforestation] = await Promise.all([
                this.getFireAlerts('2020-01-01', '2024-12-31').catch(e => ({ data: [] })),
                this.getTreeCoverLossFromFires(2015, 2023).catch(e => ({ data: [] })),
                this.getCO2EmissionsFromFires(2015, 2023).catch(e => ({ data: [] })),
                this.getDeforestationByFires().catch(e => ({ data: [] }))
            ]);

            return {
                alertas_incendios: fireAlerts.data || [],
                perdida_cobertura: treeLoss.data || [],
                emisiones_co2: emissions.data || [],
                deforestacion: deforestation.data || [],
                resumen: this.generateSummary({
                    alertas: fireAlerts.data || [],
                    perdidas: treeLoss.data || [],
                    emisiones: emissions.data || []
                })
            };

        } catch (error) {
            console.error('Error obteniendo estadísticas:', error);
            return null;
        }
    }

    // 6. API alternativa - Usar endpoints REST simples
    async getSimpleFireData() {
        try {
            const endpoints = [
                // Estadísticas de país
                `${this.baseURL}/dataset/gadm__tcl__summary_stats/latest/query?sql=SELECT * FROM table WHERE iso = '${this.country}'`,
                
                // Alertas VIIRS recientes  
                `${this.baseURL}/dataset/viirs_fire_alerts/latest/query?sql=SELECT COUNT(*) as total_alerts FROM table WHERE iso = '${this.country}' AND alert_date >= '2024-01-01'`,
                
                // Pérdida de bosques
                `${this.baseURL}/dataset/umd_tree_cover_loss/latest/query?sql=SELECT SUM(area__ha) as total_loss FROM table WHERE iso = '${this.country}'`
            ];

            const results = await Promise.allSettled(
                endpoints.map(url => fetch(url).then(res => res.json()))
            );

            return {
                estadisticas_pais: results[0].status === 'fulfilled' ? results[0].value : null,
                alertas_recientes: results[1].status === 'fulfilled' ? results[1].value : null,
                perdida_total: results[2].status === 'fulfilled' ? results[2].value : null
            };

        } catch (error) {
            console.error('Error en API simple:', error);
            return null;
        }
    }

    // Generar resumen de datos
    generateSummary(data) {
        const summary = {
            total_alertas_incendios: data.alertas?.length || 0,
            periodo_analizado: '2015-2024',
            estadisticas_clave: {}
        };

        // Calcular pérdida total
        if (data.perdidas && data.perdidas.length > 0) {
            const totalLoss = data.perdidas.reduce((sum, item) => sum + (item.loss_ha || 0), 0);
            summary.estadisticas_clave.perdida_total_hectareas = Math.round(totalLoss);
            summary.estadisticas_clave.perdida_total_formatted = `${(totalLoss / 1000).toFixed(1)}k hectáreas`;
        }

        // Calcular emisiones totales
        if (data.emisiones && data.emisiones.length > 0) {
            const totalEmissions = data.emisiones.reduce((sum, item) => sum + (item.fire_co2_mg || 0), 0);
            summary.estadisticas_clave.emisiones_co2_total = Math.round(totalEmissions);
            summary.estadisticas_clave.emisiones_co2_formatted = `${(totalEmissions / 1000000).toFixed(2)}M toneladas CO2`;
        }

        return summary;
    }

    // Formatear datos para visualización
    formatForChart(data, type = 'yearly') {
        if (!data || !Array.isArray(data)) return [];

        switch (type) {
            case 'yearly':
                return data.map(item => ({
                    year: item.year || item.alert_date?.substring(0, 4),
                    value: item.loss_ha || item.fire_co2_mg || item.total_alerts || 0,
                    formatted: this.formatValue(item.loss_ha || item.fire_co2_mg || 0)
                }));

            case 'monthly':
                return data.map(item => ({
                    month: item.alert_date?.substring(0, 7), // YYYY-MM
                    alerts: 1
                })).reduce((acc, curr) => {
                    if (curr.month) {
                        acc[curr.month] = (acc[curr.month] || 0) + 1;
                    }
                    return acc;
                }, {});

            default:
                return data;
        }
    }

    // Formatear valores para mostrar
    formatValue(value) {
        if (value >= 1000000) {
            return `${(value / 1000000).toFixed(1)}M`;
        } else if (value >= 1000) {
            return `${(value / 1000).toFixed(1)}k`;
        }
        return value.toString();
    }
}

// Función para probar la API y mostrar resultados
export async function testAPI() {
    const api = new GlobalForestWatchAPI();
    
    console.log('🔥 Probando API de Global Forest Watch para datos de incendios...');
    
    try {
        // Probar endpoint simple primero
        console.log('📊 Obteniendo datos simples...');
        const simpleData = await api.getSimpleFireData();
        console.log('Datos simples:', simpleData);

        // Probar estadísticas completas
        console.log('📈 Obteniendo estadísticas completas...');
        const fullStats = await api.getFireStatistics();
        
        if (fullStats) {
            console.log('✅ Estadísticas obtenidas:');
            console.log('- Total alertas:', fullStats.resumen.total_alertas_incendios);
            console.log('- Pérdida cobertura:', fullStats.resumen.estadisticas_clave.perdida_total_formatted);
            console.log('- Emisiones CO2:', fullStats.resumen.estadisticas_clave.emisiones_co2_formatted);
            
            return fullStats;
        } else {
            console.log('❌ No se pudieron obtener estadísticas completas');
            return simpleData;
        }

    } catch (error) {
        console.error('💥 Error en prueba de API:', error);
        return null;
    }
}

// Componente para usar en Astro
export const ForestFireComponent = {
    async getData() {
        const api = new GlobalForestWatchAPI();
        return await api.getFireStatistics();
    },
    
    formatForWeb(data) {
        if (!data) return null;
        
        return {
            summary: data.resumen,
            charts: {
                yearly_loss: api.formatForChart(data.perdida_cobertura, 'yearly'),
                monthly_alerts: api.formatForChart(data.alertas_incendios, 'monthly'),
                emissions: api.formatForChart(data.emisiones_co2, 'yearly')
            }
        };
    }
};