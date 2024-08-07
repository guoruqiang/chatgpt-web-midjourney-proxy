import { ss } from '@/utils/storage'
import { t } from '@/locales'
const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://www.nwafu-ai.me/images/pngs/mjchat.png',
      name:  t('mjset.sysname'),//'西农er’s GPT',
      description: '专为<a href="https://gpt.nwafu-ai.me" class="text-blue-500" target="_blank" >西农er</a>服务',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
