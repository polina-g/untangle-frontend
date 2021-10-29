const JournalEntryForm = ({handleChange, handleSumbit, formState}) => {
    return (
    <form onSubmit={handleSumbit}>
      <input
        onChange={handleChange}
        value={formState.feeling}
        name="feeling"
        type="number"
      />
      <input
        onChange={handleChange}
        value={formState.emotion}
        name="emotion"
        type="text"
        placeholder="Emotion"
      />
      <input
        onChange={handleChange}
        value={formState.intensity}
        name="intensity"
        type="number"
      />
      <input
        onChange={handleChange}
        value={formState.thought}
        name="thought"
        type="text"
        placeholder="Thought"
      />
      <input
        onChange={handleChange}
        value={formState.rob}
        name="rob"
        type="number"
      />
      <textarea
        onChange={handleChange}
        value={formState.situation}
        name="intensity"
        placeholder="situation"
      />
      <input
        onChange={handleChange}
        value={formState.private}
        name="private"
        type="checkbox"
      />
      <label for="private">Mark Private</label>
      <input type="submit" value="Add entry"/>
    </form>
    );
  };

  export default JournalEntryForm;