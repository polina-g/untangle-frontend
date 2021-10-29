const EntryForm = ({handleChange, handleSubmit, formState}) => {
    return (
    <form onSubmit={handleSubmit}>
      <p>How are you feeling?</p>
      <label for="feeling">1</label>
      <input 
        value="1"
        onChange={handleChange}
        name="feeling"
        type="radio"
      />
      <label for="feeling">2</label>
      <input 
        value="2"
        onChange={handleChange}
        name="feeling"
        type="radio"
      />
      <label for="feeling">3</label>
      <input 
        value="3"
        onChange={handleChange}
        name="feeling"
        type="radio"
      />
      <label for="feeling">4</label>
      <input 
        value="4"
        onChange={handleChange}
        name="feeling"
        type="radio"
      />
      <label for="feeling">5</label>
      <input 
        value="5"
        onChange={handleChange}
        name="feeling"
        type="radio"
      />
      <input
        onChange={handleChange}
        value={formState.emotion}
        name="emotion"
        type="text"
        placeholder="Emotion"
      />
      <label for="intensity">Intensity</label>
      <input
        onChange={handleChange}
        value={formState.intensity}
        name="intensity"
        type="range"
        min="0"
        max="100"
      />
      <input
        onChange={handleChange}
        value={formState.thought}
        name="thought"
        type="text"
        placeholder="Thought"
      />
      <label for="rob">Rate of Belief</label>
      <input
        onChange={handleChange}
        value={formState.rob}
        name="rob"
        type="range"
        min="0"
        max="100"
      />
      <textarea
        onChange={handleChange}
        value={formState.situation}
        name="situation"
        placeholder="situation"
      />
      <input
        onChange={handleChange}
        name="private"
        type="checkbox"
        checked={formState.private}
      />
      <label for="private">Mark Private</label>
      <input type="submit" value="Add entry"/>
    </form>
    );
  };

  export default EntryForm;