import { StyledForm } from "../styles";

const EntryForm = ({handleChange, handleSubmit, formState, isEdit}) => {
  console.log(handleChange)
    return (
    <StyledForm onSubmit={handleSubmit}>
      <p>How are you feeling?</p>
        <div>
          <div className="column">
            <label htmlFor="feeling"><img src='https://i.imgur.com/kj80WQP.png'/></label>
            <input 
              value="1"
              onChange={handleChange}
              name="feeling"
              type="radio"      
            />
          </div>
          <div className="column">
            <label htmlFor="feeling"><img src='https://i.imgur.com/dPeJdMK.png' /></label>
            <input 
              value="2"
              onChange={handleChange}
              name="feeling"
              type="radio"
            />
          </div>
          <div className="column">
            <label htmlFor="feeling"><img src='https://i.imgur.com/X3Oeeja.png'/></label>
            <input 
              value="3"
              onChange={handleChange}
              name="feeling"
              type="radio"
            />
          </div>
          <div className="column">
            <label htmlFor="feeling"><img src='https://i.imgur.com/Wkm4rbM.png'/></label>
            <input 
              value="4"
              onChange={handleChange}
              name="feeling"
              type="radio"
            />
          </div>
          <div className="column">
            <label htmlFor="feeling"><img src='https://i.imgur.com/9DlOwAL.png'/></label>
            <input 
              value="5"
              onChange={handleChange}
              name="feeling"
              type="radio"
            />
          </div>
        </div>
      <input
        onChange={handleChange}
        value={formState.emotion}
        name="emotion"
        type="text"
        placeholder="Emotion"
      />
      <label htmlFor="intensity">Intensity</label>
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
      <label HTMLfor="rob">Rate of Belief</label>
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
      <div className="markPrivate">
        <label htmlFor="private">Mark Private</label>
        <input
          onChange={handleChange}
          name="private"
          type="checkbox"
          checked={formState.private}
        />
      </div>
      <input type="submit" value={isEdit ? "Submit" : "Add Entry" }/>
    </StyledForm>
    );
  };

  export default EntryForm;