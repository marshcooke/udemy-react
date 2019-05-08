import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button
            onClick={(e) => {
                props.handleSelectedOption(props.selectedOption);
            }}
        >
            Okay!
        </button>
    </Modal>
);

export default OptionModal;

// create a new event handler in IndecisionApp that clears
// the slectedOption state, setting to undefined
// Pass that into OptionModal
// Call it on the button click
