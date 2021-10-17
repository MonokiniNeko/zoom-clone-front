import { isIe, isFirefox } from 'react-device-detect'; 

const browserCompatibility = () => {
    if (isIe || isFirefox) {
        alert("You may have a problem with your browser and camera compatibility, try again on Chrome, Edge, Safari or Opera Instead")
        return false
    } else {
        return true // return false if not compatible and true if compatible
    }
}

export default browserCompatibility