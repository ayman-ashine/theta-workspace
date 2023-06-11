// ---------- APP MODULES ---------- //

// utils
export { generateUniqueId } from '@/utils/generateUniqueId'

// data
export { AppDataReducer } from '@/data/AppDataReducer'
export { AppSettingsReducer } from '@/data/AppSettingsReducer'
export { AppDefaultData } from '@/data/AppDefaultData'
export { AppSaver } from '@/data/AppSaver'
// export { AppArchiveManager } from '@/components/data/AppArchiveManager'
// export { default as AppSettingsManager } from '@/components/data/AppSettingsManager'

// components
export { default as IconComp } from '@/components/IconComp'
export { default as HeaderComp } from '@/components/HeaderComp'
export { default as WorkspaceComp } from '@/components/WorkspaceComp'
export { default as ToolComp } from '@/components/ToolComp'

// components - menus
export { default as MenuConrol } from '@/components/MenuComp/MenuConrol'
export { default as MenuAddTool } from '@/components/MenuComp/MenuAddTool'
export { default as MenuFrame } from '@/components/MenuComp/MenuFrame'
export { default as MenuClip } from '@/components/MenuComp/MenuClip'