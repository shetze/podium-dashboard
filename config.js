// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  'prod',

    host: '0.0.0.0',
    port: process.env.PORT || 8080,

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    theme: 'harlequin',

    // clients configs
    api: {
        github: {
            baseUrl: 'https://api.github.com',
            token: ''
        }
    },

    // define duration between each dashboard rotation (ms)
    rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 15000,

    dashboards: [

        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 4,
            rows:    3,
            widgets: [
                {
                    type: 'github.user_badge',
                    user: 'shetze',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'github.repository_contributors_stats',
                    repository: 'shetze/podium-dashboard',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'mozaik.inspector',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'embed.markup',
                    title: 'Jitsi Conference Room',
                    content: '<a href="https://meet-jitsi.apps.cloud.lunetix.org/">Podium Conference</a>',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                },
                {
                    type: 'time.clock',
                    columns: 1, rows: 1,
                    x: 3, y: 0
                },
                {
                    type: 'mozaik.inspector',
                    columns: 1, rows: 1,
                    x: 0, y: 1
                },
                {
                    type: 'embed.markup',
                    title: 'Etherpad',
                    content: '<a href="https://etherpad-jitsi.apps.cloud.lunetix.org/">Podium Etherpad</a>',
                    columns: 1, rows: 2,
                    x: 3, y: 1
                },
                {
                    type: 'mozaik.inspector',
                    columns: 2, rows: 1,
                    x: 1, y: 2
                },
                {
                    type: 'github.status',
                    columns: 1, rows: 1,
                    x: 0, y: 2
                }
            ]
        },

        // second dashboard
        {
            // 3 x 2 dashboard
            columns: 3,
            rows:    2,
            widgets: [
                {
                    type: 'mozaik.inspector',
                    columns: 1, rows: 2,
                    x: 0, y: 0
                },
                {
                    type: 'github.user_badge',
                    user: 'shetze',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'mozaik.inspector',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'mozaik.inspector',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                }
            ]
        }
    ]
};

module.exports = config;
