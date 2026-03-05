import type { NewCategoryProps } from './types/types';
import Button from './Button';

const NewCategory = ({
  newCategory,
  setNewCategory,
  addNewCategory,
  setShowAddCategory,
}: NewCategoryProps) => {
  return (
    <div className='w-4/12 bg-amber-400 absolute flex flex-col justify-center items-center p-10 rounded-lg left-160 top-50 border-5 border-royal-blue'>
      <label htmlFor='newCategory' className='text-3xl text-green-600 mb-4'>
        New Category
      </label>
      <input
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        type='text'
        className='w-xl border border-gray-300 rounded p-2 mt-1 bg-white mb-5'
      />
      <div className='flex gap-10'>
        <Button
          onClick={addNewCategory}
          label='Add'
          disabled={!newCategory.trim()}
          styles={`${!newCategory.trim() ? 'cursor-not-allowed' : 'cursor-pointer'} text-white bg-royal-blue w-10/12`}
        />

        <Button
          onClick={() => setShowAddCategory(!setShowAddCategory)}
          label='Cancel'
          styles={'cursor-pointer bg-red-600 text-white w-10/12'}
        />
      </div>
    </div>
  );
};

export default NewCategory;
