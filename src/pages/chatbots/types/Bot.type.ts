import { ResponseAPI } from "./Response.type"

export type Bot = {
    _id: string,
    _id_profile: string,
    image_url: string,
    background_image_url: string,
    name: string,
    description: string,
    data: any,
    languages: Array<string>,
    isOnline: boolean,
    timestamp_creation: number,
    timestamp_last_update: number,
    timestamp_last_activity: number
}

export type BotCreateDTO = Omit<Bot, '_id' |'_id_profile' | 'timestamp_creation' | 'timestamp_last_update' | 'timestamp_last_activity'>
export type BotUpdateDTO = Omit<Bot, 'timestamp_creation' | 'timestamp_last_update' | 'timestamp_last_activity'>
export type BotGetDTO = Pick<Bot, '_id'>
export type BotDeleteDTO = Pick<Bot, '_id'>

export type Res_BotCreateDTO= ResponseAPI&{ data: Bot }
export type Res_BotUpdateDTO = ResponseAPI&{ data: Bot }
export type Res_BotGetDTO = ResponseAPI&{ data: Bot }