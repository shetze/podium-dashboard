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
                    title: 'Jitsi Conference Center',
                    content: '<a href="https://meet-jitsi.apps.cloud.lunetix.org/Plenum" target="_blank" rel="noreferrer noopener"><img src="https://cdn.pixabay.com/photo/2013/02/20/01/04/meeting-83519__340.jpg" alt="Main Podium" width="200" height="100"></a>  <a href="https://meet-jitsi.apps.cloud.lunetix.org/RoomA" target="_blank" rel="noreferrer noopener"><img src="https://cdn.pixabay.com/photo/2015/07/02/09/52/interior-design-828545__340.jpg" alt="Meeting Room" width="200" height="100"></a>  <a href="https://meet-jitsi.apps.cloud.lunetix.org/Lobby" target="_blank" rel="noreferrer noopener"><img src="https://cdn.pixabay.com/photo/2019/11/29/08/34/space-4660847__340.jpg" alt="Lobby" width="200" height="100"></a>',
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
                    content: '<a href="https://etherpad-jitsi.apps.cloud.lunetix.org/" target="_tab" rel="noreferrer noopener">Podium Etherpad Tab</a>',
                    columns: 1, rows: 2,
                    x: 3, y: 1
                },
                {
                    type: 'embed.markup',
                    title: 'DokuWiki',
                    content: '<a href="http://dokuwiki-jitsi.apps.cloud.lunetix.org/" target="_tab" rel="noreferrer noopener">Knowledge Base</a>',
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

    ]
};

module.exports = config;
