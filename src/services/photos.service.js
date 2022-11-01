import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const photosService ={
    getAll: (currentPage) => axiosService.get(`${urls.photos}?_limit=10&_page=${currentPage}`).then(value => value.data)
}