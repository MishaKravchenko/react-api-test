import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const albumsService ={
    getAll: () => axiosService.get(urls.albums).then(value => value.data)
}