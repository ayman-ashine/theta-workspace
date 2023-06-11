import { AppDefaultData } from "@/utils/modules"

const AppDataReducer = (state, action) => {

  switch (action.type) {

    case 'LOAD':
      return action.dt

    case 'ADD_WORKSPACE':
      return [...state, {
        ...AppDefaultData.WORKSPACE,
        id: action.id
      }]

    case 'REMOVE_WORKSPACE':
      return state.filter(ws => ws.id !== action.id)

    case 'CURRENT_WORKSPACE':
      return state.map(ws => {
        if (ws.id === action.id) return { ...ws, current: true }
        if (ws.current) return { ...ws, current: false }
        return ws
      })

    case 'CLEAN_ALL':
      return state.map(ws => {
        return { ...ws, frames: [] }
      })

    case 'CLEAN_CURRENT':
      return state.map(ws => {
        if (ws.current) return { ...ws, frames: [] }
        return ws
      })

    case 'UPDATE_WORKSPACE':
      return state.map(ws => {
        if (ws.id === action.id) return { ...ws, ...action.props }
        return ws
      })


    case 'ADD_FRAME':
      return state.map(ws => {
        if (ws.current) {
          return {
            ...ws, frames: [
              ...ws.frames,
              {
                ...AppDefaultData.FRAME,
                id: action.id,
                frameType: action.frameType,
                defaultStyle: action.defaultStyle,
                posX: action.posX,
                posY: action.posY
              }
            ]
          }
        } return ws
      })

    case 'REMOVE_FRAME':
      return state.map(ws => {
        if (ws.current) return { ...ws, frames: ws.frames.filter(frame => frame.id !== action.id) }
        return ws
      })

    case 'UPDATE_FRAME':
      return state.map(ws => {
        if (ws.current) return {
          ...ws, frames: ws.frames.map(frame => {
            if (frame.id === action.id) return { ...frame, ...action.props }
            return frame
          })
        }
        return ws
      })

    case 'ADD_TO_CLIP':
      return state.map(ws => {
        if (ws.current) return {
          ...ws, frames: ws.frames.map(frame => {
            if (frame.id === action.id) return { ...frame, data: frame.data?[...frame.data, action.item]:[action.item] }
            return frame
          })
        }
        return ws
      })

      // case 'REMOVE_FROM_CLIP':
      //   return state.map(ws => {
      //     if (ws.current) return {
      //       ...ws, frames: ws.frames.map(frame => {
      //         if (frame.id === action.id) return { ...frame, ...action.props }
      //         return frame
      //       })
      //     }
      //     return ws
      //   })

    default: return state

  }

}

export { AppDataReducer }