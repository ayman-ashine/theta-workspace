// DATA //

export const SVG_DATA = {

    'menu-1': (styles) => {

        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px" >
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
            </svg >
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
    'delete': (styles) => {

        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 52 52">
                <g>
                    <path d="M45.5,10H33V6c0-2.2-1.8-4-4-4h-6c-2.2,0-4,1.8-4,4v4H6.5C5.7,10,5,10.7,5,11.5v3C5,15.3,5.7,16,6.5,16h39   c0.8,0,1.5-0.7,1.5-1.5v-3C47,10.7,46.3,10,45.5,10z M23,7c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v3h-6V7z" />
                    <path d="M41.5,20h-31C9.7,20,9,20.7,9,21.5V45c0,2.8,2.2,5,5,5h24c2.8,0,5-2.2,5-5V21.5C43,20.7,42.3,20,41.5,20z    M23,42c0,0.6-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z M33,42c0,0.6-0.4,1-1,1h-2   c-0.6,0-1-0.4-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z" />
                </g>
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
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50px" height="50px" >
                <path d="M41.148,14H22.852C22.382,14,22,14.382,22,14.852v32.36c0,0.297,0.357,0.448,0.57,0.241l8.557-8.303 c0.487-0.472,1.26-0.472,1.747,0l8.557,8.303C41.643,47.66,42,47.509,42,47.213v-32.36C42,14.382,41.618,14,41.148,14z M41.148,10	C43.827,10,46,12.173,46,14.852v37.46c0,1.925-2.314,2.903-3.695,1.563L32,43.877l-10.305,9.999C20.314,55.216,18,54.237,18,52.313	v-37.46C18,12.173,20.173,10,22.852,10H41.148z"></path>
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
    'chevron-up': (styles) => {
        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="50px" height="50px" >
                <path d="M16 13l-6-6-6 6" />
            </svg>
        )
    },
    'chevron-down': (styles) => {
        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="50px" height="50px" >
                <path d="M4 7l6 6 6-6" />
            </svg>
        )
    },
    // Splite //
    'profile': (styles) => {

        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px" >
                <path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z" />
            </svg >
        )

    },
    'archive': (styles) => {

        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 52 52" >
                <g>
                    <path d="M44,15c0-2.2-1.8-4-4-4H25.3c-1.8,0-3.5-2-3.5-2l-2.5-3c0,0-1.2-2-3.5-2H12C9.8,4,8,5.8,8,8v9h36V15z" />
                    <path d="M46.9,21H5.1c-2,0-3.5,1.9-3,3.8l5.7,21c0.4,1.3,1.6,2.2,3,2.2h30.5c1.4,0,2.7-0.9,3-2.2l5.7-21   C50.4,22.9,48.9,21,46.9,21z" />
                </g>
            </svg >
        )

    },
    'clean': (styles) => {
        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 1024 1024">
                <path d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z" />
            </svg>
        )
    },
    'theme': (styles) => {
        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 16 16">
                <path d="M8,0 C12.4183,0 16,3.58172 16,8 C16,8.15958 15.9953,8.31807 15.9861,8.47533 C15.9328,9.38596 15.1095,10.0039 14.1974,10.0039 L11.0106,10.0039 C9.22875,10.0039 8.33642,12.1582 9.59635,13.4181 C10.4823,14.304 10.198,15.7959 8.95388,15.9437 C8.6411,15.9809 8.32278,16 8,16 C3.58172,16 0,12.4183 0,8 C0,3.58172 3.58172,0 8,0 Z M8,2 C4.68629,2 2,4.68629 2,8 C2,11.1538 4.4333,13.7393 7.52492,13.9815 C6.059,11.4506 7.82321,8.00391 11.0106,8.00391 L14,8.00391 C14,4.68629 11.3137,2 8,2 Z M5,8 C5.55228,8 6,8.44771 6,9 C6,9.55228 5.55228,10 5,10 C4.44772,10 4,9.55228 4,9 C4,8.44771 4.44772,8 5,8 Z M6,5 C6.55228,5 7,5.44772 7,6 C7,6.55228 6.55228,7 6,7 C5.44772,7 5,6.55228 5,6 C5,5.44772 5.44772,5 6,5 Z M9,4 C9.55228,4 10,4.44772 10,5 C10,5.55228 9.55228,6 9,6 C8.44771,6 8,5.55228 8,5 C8,4.44772 8.44771,4 9,4 Z" />
            </svg>
        )
    },
    'color': (styles) => {
        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 52 52">
                <path d="M35.4350288,9.49390335 L42.5060967,16.5649712 L42.5077201,16.5633477 C44.0698172,18.1254449 44.0698172,20.6581048 42.5077201,22.220202 L42.5060957,22.2218254 L24,40.7034386 L24,15.2639687 L29.7768418,9.49256991 L29.7781746,9.49390397 C31.340487,7.93306359 33.8721188,7.93366021 35.4336954,9.49523678 L35.4350288,9.49390335 Z M50,36 L50,46 C50,48.209139 48.209139,50 46,50 L21,50 L39,32 L46,32 C48.209139,32 50,33.790861 50,36 Z M2.00011396,41.0457762 L2.00011879,41.0462543 C2.00003963,41.0310054 2,41.0155876 2,41 L2,6 C2,3.790861 3.790861,2 6,2 L16,2 C18.209139,2 20,3.790861 20,6 L20,41 C20,41.0155876 19.9999604,41.0310054 19.999886,41.0457762 C19.9752374,45.9952784 15.9552951,50 11,50 C6.04470488,50 2.0247626,45.9952784 2.00011396,41.0457762 Z M11,45 C13.209139,45 15,43.209139 15,41 C15,38.790861 13.209139,37 11,37 C8.790861,37 7,38.790861 7,41 C7,43.209139 8.790861,45 11,45 Z" />
            </svg>
        )
    },
    'minimize': (styles) => {
        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 52 52">
                <path d="M29.6,23.9H45c1,0,1.3-1.1,0.5-1.9l-4.9-5l9-9.1c0.5-0.5,0.5-1.4,0-1.9l-3.7-3.7c-0.5-0.4-1.3-0.4-1.9,0.1  l-9,9l-5.1-4.9C29.1,5.7,28,6,28,7v15.4C28,23.1,28.9,23.9,29.6,23.9z" />
                <path d="M22.4,28H7c-1,0-1.3,1.1-0.5,1.9l4.9,5l-9,9.1c-0.5,0.5-0.5,1.4,0,1.9l3.7,3.7c0.5,0.5,1.3,0.5,1.9,0  l9.1-9.1l5.1,4.9C22.9,46.3,24,46,24,45V29.7C24,29,23.1,28,22.4,28z" />
            </svg>
        )
    },
    'expand': (styles) => {
        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 52 52">
                <path d="M48.8,2H33.3c-1,0-1.3,0.9-0.5,1.7l4.9,4.9l-9,9c-0.5,0.5-0.5,1.3,0,1.9l3.7,3.7c0.5,0.5,1.3,0.5,1.9,0  l9.1-9.1l4.9,4.9c0.8,0.8,1.7,0.5,1.7-0.5V3.1C50,2.5,49.4,2,48.8,2z" />
                <path d="M3.5,50h15.4c1,0,1.3-1.1,0.5-1.9l-4.9-5l9-9.1c0.5-0.5,0.5-1.4,0-1.9l-3.7-3.7c-0.5-0.5-1.3-0.5-1.9,0l-9,9  l-5-4.9C3,31.7,2,32,2,33v15.4C2,49.1,2.8,50,3.5,50z" />
            </svg>
        )
    },
    'search': (styles) => {
        return (
            <svg className={styles.join(' ')} xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 32 32">
                <path d="M27 24.57l-5.647-5.648a8.895 8.895 0 0 0 1.522-4.984C22.875 9.01 18.867 5 13.938 5 9.01 5 5 9.01 5 13.938c0 4.929 4.01 8.938 8.938 8.938a8.887 8.887 0 0 0 4.984-1.522L24.568 27 27 24.57zm-13.062-4.445a6.194 6.194 0 0 1-6.188-6.188 6.195 6.195 0 0 1 6.188-6.188 6.195 6.195 0 0 1 6.188 6.188 6.195 6.195 0 0 1-6.188 6.188z" />
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

}

export const SETTINGS_DATA = {
    name: 'SETTINGS_DATA',
    default: {
        theme: 'DARK'
    }
}

export const HEADER_DATA = {
    height: 50,
    control: {
        width: 50
    }
}

export const WORKSPACE_DATA = {
    name: 'WORKSPACE_DATA',
    default: {
        currentWorkspace: null,
        currentTool: null,
        workspaces: [
            {
                id: "yvSiqP",
                name: 'Initial Workspace',
                current: false,
                currentTool: null,
                posX: 0,
                posY: 0,
                zoom: 1,
                tools: [
                    { "id": "yvNiqJ", "type": "T_TODO", "iconType": "todo", "frame": true, "title": null, "color": "bg-red", "minimize": false, "clip": true, "posX": -436, "posY": -88, "width": 350, "height": 0, "data": [{ "id": "hegRGL", "title": "", "complete": false }, { "id": "VUKnTu", "title": "", "complete": false }] },
                    { "id": "BeDCxi", "type": "T_CLIP", "iconType": "clip", "frame": false, "title": "Todo", "color": "bg-blue", "minimize": false, "clip": false, "posX": -436, "posY": -128, "width": 350, "height": 0, "data": { "height": 80, "tools": ["yvNiqJ"] } },
                    { "id": "eIEyOE", "type": "T_CLIP", "iconType": "clip", "frame": false, "title": "In Progress", "color": "bg-blue", "minimize": false, "clip": false, "posX": -67, "posY": -129, "width": 350, "height": 0, "data": { "height": 80, "tools": ["EpapvO"] } },
                    { "id": "EpapvO", "type": "T_TODO", "iconType": "todo", "frame": true, "title": null, "color": "bg-yellow", "minimize": false, "clip": true, "posX": -67, "posY": -89, "width": 350, "height": 0, "data": [{ "id": "FTlWUp", "title": "", "complete": false }, { "id": "qQtZqx", "title": "", "complete": false }] },
                    { "id": "Btrfzp", "type": "T_CLIP", "iconType": "clip", "frame": false, "title": "Done", "color": "bg-blue", "minimize": false, "clip": false, "posX": 299, "posY": -128, "width": 350, "height": 0, "data": { "height": 80, "tools": ["gdJoSk"] } },
                    { "id": "gdJoSk", "type": "T_TODO", "iconType": "todo", "frame": true, "title": null, "color": "bg-green", "minimize": false, "clip": true, "posX": 299, "posY": -88, "width": 350, "height": 0, "data": [{ "id": "UThLcG", "title": "", "complete": false }, { "id": "xtoikM", "title": "", "complete": false }] },

                ]
            }
        ],
    },
    workspace: {
        id: null,
        name: 'Workspace',
        current: false,
        currentTool: null,
        edit: false,
        posX: 0,
        posY: 0,
        zoom: 1,
        tools: [],
    },
    tool: {
        id: null,
        type: null,
        iconType: null,
        frame: null,
        title: null,
        color: 'bg-blue',
        minimize: false,
        clip: false,
        posX: 0,
        posY: 0,
        width: 350,
        height: 0,
        data: null,
    }
}

export const FRAME_DATA = {
    headHeight: 40,
}

export const CHRONO_DATA = {
    default: {
        start: false,
        lapses: [],
        stockTime: 0,
        hour: 0,
        min: 0,
        sec: 0
    },
    laps: {
        id: null,
        time: null,
    },
}

export const TIMER_DATA = {
    default: {
        start: false,
        lapses: [],
        stockTime: 0,
        hour: 0,
        min: 0,
        sec: 0
    },
    laps: {
        id: null,
        time: null,
    },
}

export const MENU_DATA = {
    name: 'MENU_DATA',
    width: 200,
    default: {
        type: null,
        posX: null,
        posY: null,
        dt: {}
    }
}

export const MENU_TOOLS_DATA = [
    {
        type: 'T_CLIP',
        frame: false,
        name: 'Clip',
        icon: 'clip'
    },
    {
        type: 'T_NOTE',
        frame: true,
        name: 'Note',
        icon: 'note'
    },
    {
        type: 'T_TODO',
        frame: true,
        name: 'Todo List',
        icon: 'todo'
    },
    {
        type: 'T_TIMER',
        frame: true,
        name: 'Timer',
        icon: 'timer'
    },
    {
        type: 'T_CHRONO',
        frame: true,
        name: 'Chrono',
        icon: 'chrono'
    },
    {
        type: 'T_CALENDAR',
        frame: true,
        name: 'Calendar',
        icon: 'calendar'
    },
]

export const ASIDE_DATA = {
    name: 'ASIDE_DATA',
    default: {}
}

export const ARCHIVE_DATA = {
    A:{},
    B:{},
    C:{},
    D:{},
    E:{},
    F:{},
    G:{},
    H:{},
    I:{},
    J:{},
    K:{},
    L:{},
    M:{},
    N:{},
    O:{},
    P:{},
    Q:{},
    R:{},
    S:{},
    T:{},
    U:{},
    V:{},
    W:{},
    X:{},
    Y:{},
    Z:{},
}