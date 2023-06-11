// All app initial data //

const AppDefaultData = {

    // Components
    WORKSPACE: {
        id: null,
        name: 'Workspace',
        current: false,
        activeFrame: null,
        frames: []
    },
    HEADER: {
        height: 50
    },
    MENU: {
        width: 200
    },
    FRAME: {
        id: null,
        frameType: null,
        defaultStyle: true,
        posX: 0,
        posY: 0,
        width: 350,
        height: 350,
        title: null,
        color: 'bkg-blue',
        minimize: false,
        data: null,
    },
    TOOLS: [
        {
            frameType: 't-clip',
            defaultStyle: false,
            name: 'Clip',
            icon: {
                type: 'clip',
                styles: ['md-i', 'light-i']
            }
        },
        {
            frameType: 't-note',
            defaultStyle: true,
            name: 'Note',
            icon: {
                type: 'note',
                styles: ['md-i', 'light-i']
            }
        },
        {
            frameType: 't-todo',
            defaultStyle: true,
            name: 'Todo List',
            icon: {
                type: 'todo',
                styles: ['md-i', 'light-i']
            }
        },
        {
            frameType: 't-timer',
            defaultStyle: true,
            name: 'Timer',
            icon: {
                type: 'timer',
                styles: ['md-i', 'light-i']
            }
        },
        {
            frameType: 't-chrono',
            defaultStyle: true,
            name: 'Chrono',
            icon: {
                type: 'chrono',
                styles: ['md-i', 'light-i']
            }
        },
        {
            frameType: 't-calendar',
            defaultStyle: true,
            name: 'Calendar',
            icon: {
                type: 'calendar',
                styles: ['md-i', 'light-i']
            }
        },
    ],
    CHRONO: {
        start: false,
        lapses: [],
        stockTime: 0,
        hour: 0,
        min: 0,
        sec: 0
    },
    SVG_ICONS: {

        'menu-1': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px">
                    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
                </svg>
            )

        },

        'menu-2': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="50" height="50">
                    <path d="M12 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-12 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                </svg>
            )

        },

        'add': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50px" height="50px" >
                    <polygon points="25,15 17,15 17,7 15,7 15,15 7,15 7,17 15,17 15,25 17,25 17,17 25,17  " />
                </svg>
            )

        },

        'edit': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="50" width="50" >
                    <path d="M14.8024118,6.44526791 L8.69610276,12.549589 C8.29095108,12.9079238 8.04030835,13.4092335 8,13.8678295 L8,16.0029438 L10.0639829,16.004826 C10.5982069,15.9670062 11.0954869,15.7183782 11.4947932,15.2616227 L17.556693,9.19972295 L14.8024118,6.44526791 Z M16.2168556,5.0312846 L18.9709065,7.78550938 L19.8647941,6.89162181 C19.9513987,6.80501747 20.0000526,6.68755666 20.0000526,6.56507948 C20.0000526,6.4426023 19.9513987,6.32514149 19.8647932,6.23853626 L17.7611243,4.13485646 C17.6754884,4.04854589 17.5589355,4 17.43735,4 C17.3157645,4 17.1992116,4.04854589 17.1135757,4.13485646 L16.2168556,5.0312846 Z M22,13 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 L11,2 L11,4 L4,4 L4,20 L20,20 L20,13 L22,13 Z M17.43735,2 C18.0920882,2 18.7197259,2.26141978 19.1781068,2.7234227 L21.2790059,4.82432181 C21.7406843,5.28599904 22.0000526,5.91216845 22.0000526,6.56507948 C22.0000526,7.21799052 21.7406843,7.84415992 21.2790068,8.30583626 L12.9575072,16.6237545 C12.2590245,17.4294925 11.2689,17.9245308 10.1346,18.0023295 L6,18.0023295 L6,17.0023295 L6.00324765,13.7873015 C6.08843822,12.7328366 6.57866679,11.7523321 7.32649633,11.0934196 L15.6953877,2.72462818 C16.1563921,2.2608295 16.7833514,2 17.43735,2 Z" fillRule="evenodd" />
                </svg>
            )

        },

        'remove': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50px" height="50px" >
                    <polygon points="24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4" />
                </svg>
            )

        },

        'grab': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="50px" height="50px" >
                    <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z" />
                </svg>
            )

        },

        'start': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50px" height="50px" >
                    <path d="M330.61,225.16,217,159.57c-23.74-13.71-53.41,3.42-53.41,30.84V321.59c0,27.42,29.67,44.55,53.41,30.84l113.61-65.59C354.35,273.13,354.35,238.87,330.61,225.16Z" />
                </svg>
            )

        },

        'pause': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px" >
                    <path d="M8,6C6.896,6,6,6.896,6,8v8c0,1.104,0.896,2,2,2s2-0.896,2-2V8C10,6.896,9.104,6,8,6z" /><path d="M15,6c-1.104,0-2,0.896-2,2v8c0,1.104,0.896,2,2,2s2-0.896,2-2V8C17,6.896,16.104,6,15,6z" />
                </svg>
            )

        },

        'reset': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50px" height="50px" >
                    <path d="M45.4,23.6c-2.7-2.6-6.4-4.1-10.2-4.1c-4,0-8,0-12.1,0c-0.3,0-0.7,0-1,0c1.3-1.3,2.5-2.5,3.8-3.8c0.9-0.9,0.9-2.4,0-3.2  c-0.9-0.9-2.4-0.9-3.2,0c-2.5,2.5-5,5-7.5,7.5c-0.9,0.9-0.9,2.4,0,3.2c2.6,2.6,5.1,5.1,7.8,7.8c0.9,0.9,2.4,0.9,3.2,0  c0.9-0.9,0.9-2.4,0-3.2c-1.3-1.3-2.5-2.5-3.8-3.8c3.8,0,7.4,0,11.2,0c0.6,0,1.1,0,1.7,0c6.1,0.1,11,5.7,9.7,11.8  c-0.6,3-2.4,5.4-5,6.9c-2.2,1.1-4.5,1.1-6.9,1.1c-3,0-3,4.6,0,4.6c2.4,0,4.7,0,7-0.8c3.1-1.1,5.8-3.3,7.5-6.1  C51.1,35.8,50.2,28.2,45.4,23.6z" />
                </svg>
            )

        },

        'checkmark': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50px" height="50px" >
                    <path d="M27.704,8.397c-0.394-0.391-1.034-0.391-1.428,0  L11.988,22.59l-6.282-6.193c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414l6.999,6.899  c0.39,0.386,1.039,0.386,1.429,0L27.704,9.811C28.099,9.421,28.099,8.787,27.704,8.397C27.31,8.006,28.099,8.787,27.704,8.397z" />
                </svg>
            )

        },

        'save': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px" width="50px" height="50px" >
                    <path d="M41.148,14H22.852C22.382,14,22,14.382,22,14.852v32.36c0,0.297,0.357,0.448,0.57,0.241l8.557-8.303	c0.487-0.472,1.26-0.472,1.747,0l8.557,8.303C41.643,47.66,42,47.509,42,47.213v-32.36C42,14.382,41.618,14,41.148,14z M41.148,10	C43.827,10,46,12.173,46,14.852v37.46c0,1.925-2.314,2.903-3.695,1.563L32,43.877l-10.305,9.999C20.314,55.216,18,54.237,18,52.313	v-37.46C18,12.173,20.173,10,22.852,10H41.148z"></path>
                </svg>
            )

        },

        'clip': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" x="0px" y="0px" width="50px" height="50px">
                    <path d="M12.021 4.234v8.498h-1v-8.498c0-1.091-0.799-2.266-2.554-2.266-1.941 0-2.459 1.424-2.459 2.266v8.121h0.007v1.457c0 0.62 0.693 1.206 1.426 1.206 0.844 0 1.567-0.683 1.567-1.241v-0.27h-0.003l0.008-7.617c0-0.874-0.247-0.874-0.466-0.874-0.369 0-0.547 0.035-0.547 0.823v5.146h-1v-5.146c0-0.451 0-1.823 1.547-1.823 0.669 0 1.466 0.325 1.466 1.875l-0.007 6.43h0.002v1.457c0 1.173-1.224 2.241-2.567 2.241-1.292 0-2.426-1.031-2.426-2.206v-0.074h-0.007v-9.505c0-1.573 1.082-3.266 3.459-3.266 2.333 0.001 3.554 1.643 3.554 3.266z" />
                </svg>
            )

        },


        'note': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="50px" height="50px" >
                    <path d="M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z" />
                </svg>
            )

        },

        'todo': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px" >
                    <path d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2v2zm0 2v2h-2V4H9v2H7V4H5v16h14V4h-2zM7 8h10v2H7V8zm0 4h10v2H7v-2z" />
                </svg>
            )

        },

        'timer': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px" >
                    <path d="M12,13.41,13.41,12,8.46,7.05,7.05,8.46Zm7.07-8.48A9.93,9.93,0,0,0,12,2H11V6h2V4.06A8,8,0,1,1,6.34,6.34l.71-.7L5.64,4.22l-.71.71A10,10,0,1,0,19.07,19.07a10,10,0,0,0,0-14.14Z" />
                </svg>
            )

        },

        'chrono': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px" >
                    <path d="M0 0h24v24H0z" fill="none" /><path d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-1.414-1.414zM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM11 8h2v6h-2V8zM8 1h8v2H8V1z" />
                </svg>
            )

        },

        'calendar': (styles) => {

            return (
                <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px" >
                    <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" />
                    <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z" />
                </svg>
            )

        },

    },

    // App Data
    APP_DATA: {
        name: 'APP_DATA',
        initialData: []
    }

}

export { AppDefaultData }