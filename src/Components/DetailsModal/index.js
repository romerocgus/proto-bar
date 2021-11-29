import ReactDom from "react-dom";

function DetailsModal({children}){
    return ReactDom.createPortal(
        children, 
        document.getElementById("modal")
    );
};

export { DetailsModal }