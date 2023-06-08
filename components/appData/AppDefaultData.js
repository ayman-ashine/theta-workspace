// All app initial data //

export const AppDefaultData = {

    defaultFrameData: {
        id: null,
        toolId: null,
        posX: 0,
        posY: 0,
        width: 350,
        height: 350,
        title: null,
        color: 'bkg-blue',
        minimize: false,
        data: null,
    },
    defaultWorkspaceData: {
        id: null,
        name: 'Workspace',
        current: false,
        frames: []
    },
    defaultMenuToolsData: [
        {
            id: 't-note',
            name: 'Note',
            iconData: {
                icon_type: 'note',
                icon_styles: ['md-i', 'light-i']
            }
        },
        {
            id: 't-todo',
            name: 'Todo List',
            iconData: {
                icon_type: 'todo',
                icon_styles: ['md-i', 'light-i']
            }
        },
        {
            id: 't-timer',
            name: 'Timer',
            iconData: {
                icon_type: 'timer',
                icon_styles: ['md-i', 'light-i']
            }
        },
        {
            id: 't-chrono',
            name: 'Chrono',
            iconData: {
                icon_type: 'chrono',
                icon_styles: ['md-i', 'light-i']
            }
        },
        {
            id: 't-calendar',
            name: 'Calendar',
            iconData: {
                icon_type: 'calendar',
                icon_styles: ['md-i', 'light-i']
            }
        },
    ],
    defaultChronoData: {
        start: false,
        lapses: [],
        stockTime: 0,
        hour: 0,
        min: 0,
        sec: 0
    },

}