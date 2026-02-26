import { useState } from 'react';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [categories, setCategories] = useState(['Personal', 'Work', 'School']);
  const [category, setCategory] = useState('Personal');
  const [description, setDescription] = useState('');
  const [showAddCategory, setShowAddCategory] = useState(false);

  return (
    <form className='mt-10 text-center'>
      <label htmlFor='title' className='text-4xl text-green-600'>
        Title
      </label>
      <input
        type='text'
        id='title'
        className='w-full border border-gray-300 rounded p-2 mt-1 bg-white mb-5'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className='flex items-center justify-center relative'>
        <label htmlFor='category' className='text-4xl text-green-600 mr-5'>
          Category
        </label>
        <img
          onClick={() => setShowAddCategory(true)}
          src='./public/plus.svg'
          alt='Add Note'
          width={'40px'}
          className='absolute right-8 cursor-pointer'
        />
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        name='category'
        id='category'
        className='w-full border border-gray-300 rounded p-2 mt-1 bg-white mb-5'
      >
        {categories.map((cat) => (
          <option key={cat} value={category}>
            {cat}
          </option>
        ))}
      </select>
    </form>
  );
};

export default NoteForm;
