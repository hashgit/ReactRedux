import axios from "axios";

export function Convert(data) {
    return {
        type: "CONVERT",
        payload: axios.post("http://localhost:8019/api/textconversion", data)
    }
}
