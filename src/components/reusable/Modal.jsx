import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const usePortal = (id) => {
    const createRootElement = (id) => {
        const rootContainer = document.createElement('div');
        rootContainer.setAttribute('id', id);
        return rootContainer;
    }

    const addRootElement = (rootElem) => {
        document.body.insertBefore(
            rootElem,
            document.body.lastElementChild.nextElementSibling
        )
    }

    const rootElemRef = useRef(null);

    useEffect(() => {
        const existingParent = document.querySelector(`#${id}`);

        const parentElem = existingParent || createRootElement(id);

        if(!existingParent) {
            addRootElement(parentElem);
        }

        parentElem.classList.add("modal");
        parentElem.appendChild(rootElemRef.current);

        return () => {
            rootElemRef.current.remove();

            if (parentElem.childNodes.length === 0) {
                parentElem.remove();
            }
        }
    // eslint-disable-next-line
    }, []);

    const getRootElem = () => {
        if (!rootElemRef.current) {
            rootElemRef.current = document.createElement('div');
        }
        return rootElemRef.current;
    }

    return getRootElem();
}

const Modal = ({ id = "modal", children }) => {
    const target = usePortal(id);
    return createPortal(
        children,
        target,
    );
};

export default Modal;