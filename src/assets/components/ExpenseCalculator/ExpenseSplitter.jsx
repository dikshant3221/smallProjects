// src/components/ExpenseSplitter.js

import React, { useState } from 'react';

const ExpenseSplitter = () => {
  const [participants, setParticipants] = useState([]);
  const [participantName, setParticipantName] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [payer, setPayer] = useState('');

  const addParticipant = () => {
    if (participantName.trim() && !participants.some(p => p.name === participantName.trim())) {
      setParticipants([...participants, { name: participantName.trim(), amountPaid: 0 }]);
      setParticipantName('');
    }
  };

  const addExpense = () => {
    if (expenseDescription.trim() && expenseAmount > 0 && payer) {
      const updatedParticipants = participants.map(p => {
        if (p.name === payer) {
          return { ...p, amountPaid: p.amountPaid + parseFloat(expenseAmount) };
        }
        return p;
      });
      setParticipants(updatedParticipants);
      setExpenseDescription('');
      setExpenseAmount('');
      setPayer('');
    }
  };

  const calculateOwedAmounts = () => {
    const totalAmount = participants.reduce((sum, p) => sum + p.amountPaid, 0);
    const share = totalAmount / participants.length;
    return participants.map(p => {
      const amountOwed = share - p.amountPaid;
      return { ...p, amountOwed };
    });
  };

  const updatedParticipants = calculateOwedAmounts();

  return (
    <div className="container mt-5">
      <h2>Expense Sharing App</h2>
      <div className="mb-3">
        <label htmlFor="participantName" className="form-label">Add Participant</label>
        <input
          type="text"
          className="form-control"
          id="participantName"
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={addParticipant}>Add Participant</button>
      </div>
      <div className="mb-3">
        <label htmlFor="expenseDescription" className="form-label">Expense Description</label>
        <input
          type="text"
          className="form-control"
          id="expenseDescription"
          value={expenseDescription}
          onChange={(e) => setExpenseDescription(e.target.value)}
        />
        <label htmlFor="expenseAmount" className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          id="expenseAmount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <label htmlFor="payer" className="form-label">Paid by</label>
        <select
          className="form-control"
          id="payer"
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
        >
          <option value="">Select Payer</option>
          {participants.map((participant, index) => (
            <option key={index} value={participant.name}>{participant.name}</option>
          ))}
        </select>
        <button className="btn btn-primary mt-2" onClick={addExpense}>Add Expense</button>
      </div>
      <div>
        <h4>Participants</h4>
        <ul className="list-group">
          {updatedParticipants.map((participant, index) => (
            <li key={index} className="list-group-item">
              {participant.name} - Owes: ${participant.amountOwed.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseSplitter;
