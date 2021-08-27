import axios, {
    AxiosResponse, AxiosRequestConfig
} from "axios";

import {
    Get, GetError,
    Post
} from '../../Type/types'

const baseUrl = `${process.env.MANAGE_OF_SERVER}/api`

const service = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
})

const get : Get | GetError = async (url: string, params?: object, config?:AxiosRequestConfig) => {
    try {
        const response = await service.get(url, {
            params, ...config
        });
        switch (response.data.code) {
            case 0:
                return response.data.data
            case 429:
        //        TODO
                break;
            default:
        //        TODO
                break;
        }

    //    TODO: Update Time
    } catch (e) {
        switch (e.data.code) {
            case 429:
        //        TODO
                break;
            default:
        //        TODO
        }

        // TODO: Update Time
    }
}

const post : Post | GetError = async (url: string, data: object, config?:AxiosRequestConfig) => {
    try {
        const response = await service.post(url, data, {
            ...config
        });
        switch (response.data.code) {
            case 0:
                return response.data.data
            case 429:
                //        TODO
                break;
            default:
                //        TODO
                break;
        }

        //    TODO: Update Time
    } catch (e) {
        switch (e.data.code) {
            case 429:
                //        TODO
                break;
            default:
            //        TODO
        }

        // TODO: Update Time
    }
}

const request = {
    get,
    post
};

export default {
}