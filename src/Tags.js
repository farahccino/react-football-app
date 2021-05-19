import styled from 'styled-components';
import { useState } from 'react';

export default function Tags({ tags, onUpdateTags, onDeleteTag }) {
  const [tag, setTag] = useState('');

  function handleChange(event) {
    setTag(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onUpdateTags(tag);
      setTag(''); 
    }
    else if (tag.length === 0 && event.key === 'Backspace') {
        onDeleteTag(tags.pop()); //alternativ:  (tags[tags.length - 1])
    }
  }

  return (
   <>
    <Label htmlFor="tag">Player Skills</Label>
    <Tag>
      <TagCloud>
        {tags.map((tag, index) => (
          <span key={index + tag}>{tag}
          <Button onClick={() => onDeleteTag(tag)}>X</Button> {' '}
          </span>   
        ))}
        <input
        type="text"
        placeholder="Write here..."
        name="tag"
        value={tag}
        onChange={handleChange}
        onKeyDown={handleKeyDown} //soll nur passieren wenn enter gedrückt wird
      />
      </TagCloud>
    </Tag>
    </>
  );
}

const Label = styled.label`
display: block;
font-weight: bold;
font-family: sans-serif;
font-size: 1.5rem;
margin-bottom: 0.5rem;
`

const Button = styled.button`
border: none;
background: none;
color: hsla(357, 77%, 39%, 0.75);
cursor: pointer;
`

const Tag = styled.section`
  display: inline-flex;
  gap: 0.4rem;
  font-family: sans-serif;

  input {
    padding: 0.5rem;
  }

  span {
    margin: 0.2rem;
    background: hsla(156, 77%, 39%, 0.75);
    color: ivory;
    padding: 0.3rem;
    border-radius: 0.3rem;
  }
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

