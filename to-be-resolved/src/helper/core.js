import {toast} from "react-toastify";

export const Error =  (props) => {
    if (props.error !== undefined && props.error !== "") {
        if (typeof props !== "object") {
            props.error.map((v, k) => (
                toast.error(v)
            ))
        } else {
            toast.error("error")
        }
    }
}