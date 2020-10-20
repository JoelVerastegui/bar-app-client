import React from 'react';
import styles from './ConfirmModal.module.scss';
import vars from '../../utilities/_variables.scss';

// ===== Components ===== //
import Modal from './Modal';
import Motion from './Motion';
// ====================== //

const ConfirmModal = ({ id, title = "¡Atención!", message = "", confirmLabel = "Confirmar", cancelLabel = "Cancelar", onConfirm, onCancel }) => {
    return (
        <Modal id={id}>
            <Motion
                animate={{
                    backgroundColor: 'rgba(0,0,0,0.8)'
                }}>
                <div className={styles.confirmModal}>
                    <div className={styles.modalContainer + " shadow"}>
                        <h3>{title}</h3>
                        <div className={styles.modalContent}>
                            <span>{message}</span>
                            <div className={styles.modalOptions}>
                                <Motion
                                    whileHover={{ scale: 1.1, backgroundColor: vars.primaryLight }}
                                    whileTap={{ scale: 0.9, backgroundColor: vars.secondaryDark }}>
                                    <button className={styles.modalConfirm + " shadow"} onClick={onConfirm}>
                                        {confirmLabel}
                                    </button>
                                </Motion>
                                <Motion
                                    whileHover={{ scale: 1.1, backgroundColor: vars.primaryLight }}
                                    whileTap={{ scale: 0.9, backgroundColor: vars.primaryDark }}>
                                    <button className={styles.modalCancel + " shadow"} onClick={onCancel}>
                                        {cancelLabel}
                                    </button>
                                </Motion>
                            </div>
                        </div>
                    </div>
                </div>
            </Motion>
        </Modal>
    )
}

export default ConfirmModal;