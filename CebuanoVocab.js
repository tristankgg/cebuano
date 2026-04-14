import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import './CebuanoVocab.css';

const CebuanoVocab = () => {
  const vocabularyData = {
    categories: [
      {
        id: 'greetings',
        name: 'Greetings & Phrases',
        color: '#FF6B6B',
        words: [
          { english: "What's your job?", cebuano: 'Unsay imong trabaho?' },
          { english: "What's wrong?", cebuano: 'Unsay problema?' },
          { english: 'Are you sure?', cebuano: 'Sure ka?' },
          { english: 'Are you ready?', cebuano: 'Ready naka?' },
          { english: 'Forgive me', cebuano: 'Pasaylo-a ko' },
          { english: 'See you later', cebuano: 'Kita ta sa sunod' },
          { english: 'Good luck', cebuano: 'Maayong swerte' },
        ],
      },
      {
        id: 'family',
        name: 'Family Members',
        color: '#4ECDC4',
        words: [
          { english: 'Grandparent', cebuano: 'Apohang' },
          { english: 'Aunt', cebuano: 'Iyaan (tiya)' },
          { english: 'Uncle', cebuano: 'Uyoan (tiyo)' },
          { english: 'Cousin', cebuano: 'Ig-agaw' },
          { english: 'Older sibling', cebuano: 'Magulang' },
          { english: 'Younger sibling', cebuano: 'Manghody' },
          { english: 'Friend', cebuano: 'Higala' },
        ],
      },
      {
        id: 'house',
        name: 'House & Building',
        color: '#95E1D3',
        words: [
          { english: 'Window', cebuano: 'Bentana' },
          { english: 'Door', cebuano: 'Pwerта' },
          { english: 'Wall', cebuano: 'Dingding' },
          { english: 'Stair', cebuano: 'Hagdan' },
          { english: 'Porch', cebuano: 'Balkon' },
          { english: 'Floor', cebuano: 'Salog' },
          { english: 'Roof', cebuano: 'Atop' },
          { english: 'Kitchen', cebuano: 'Kusina' },
        ],
      },
      {
        id: 'food',
        name: 'Food & Dining',
        color: '#F9A825',
        words: [
          { english: 'Meat', cebuano: 'Karne' },
          { english: 'Cheese', cebuano: 'Keso' },
          { english: 'Soup', cebuano: 'Sabaw' },
          { english: 'Bread', cebuano: 'Tinapay' },
          { english: 'Breakfast', cebuano: 'Pamahaw' },
          { english: 'Lunch', cebuano: 'Paniudto' },
          { english: 'Dinner', cebuano: 'Panihapon' },
          { english: 'Coffee', cebuano: 'Kape' },
        ],
      },
      {
        id: 'vegetables',
        name: 'Fruits & Vegetables',
        color: '#38B000',
        words: [
          { english: 'Potatoes', cebuano: 'Patatas' },
          { english: 'Sweet potato', cebuano: 'Kamote' },
          { english: 'Tomatoes', cebuano: 'Kamatiso' },
          { english: 'Onions', cebuano: 'Sibuyaso' },
          { english: 'Apples', cebuano: 'Mansana' },
          { english: 'Bananas', cebuano: 'Sagin' },
          { english: 'Mango', cebuano: 'Mango' },
          { english: 'Pineapple', cebuano: 'Pina' },
        ],
      },
      {
        id: 'animals',
        name: 'Animals & Insects',
        color: '#FF8C42',
        words: [
          { english: 'Horse', cebuano: 'Kabayo' },
          { english: 'Goat', cebuano: 'Kanding' },
          { english: 'Duck', cebuano: 'Itik' },
          { english: 'Fly', cebuano: 'Langaw' },
          { english: 'Mosquito', cebuano: 'Lamok' },
          { english: 'Bee', cebuano: 'Buyog' },
          { english: 'Frog', cebuano: 'Baki' },
          { english: 'Chicken', cebuano: 'Manok' },
        ],
      },
      {
        id: 'verbs',
        name: 'Common Verbs',
        color: '#A355FF',
        words: [
          { english: 'To study', cebuano: 'Magtuon' },
          { english: 'To sleep', cebuano: 'Matulog' },
          { english: 'To teach', cebuano: 'Magtudlo' },
          { english: 'To walk', cebuano: 'Maglakaw' },
          { english: 'To arrive', cebuano: 'Moabot' },
          { english: 'To attend', cebuano: 'Motambong' },
          { english: 'To leave', cebuano: 'Moadto' },
          { english: 'To come back', cebuano: 'Mobalik' },
        ],
      },
      {
        id: 'colors',
        name: 'Colors',
        color: '#FF1493',
        words: [
          { english: 'White', cebuano: 'Puti' },
          { english: 'Black', cebuano: 'Itom' },
          { english: 'Red', cebuano: 'Pula' },
          { english: 'Blue', cebuano: 'Asul' },
          { english: 'Yellow', cebuano: 'Dilaw' },
          { english: 'Purple', cebuano: 'Lila' },
          { english: 'Orange', cebuano: 'Kahel' },
          { english: 'Green', cebuano: 'Berde' },
        ],
      },
      {
        id: 'body',
        name: 'Body Parts',
        color: '#E74C3C',
        words: [
          { english: 'Head', cebuano: 'Ulo' },
          { english: 'Nose', cebuano: 'Ilong' },
          { english: 'Eyes', cebuano: 'Mata' },
          { english: 'Ears', cebuano: 'Tainga' },
          { english: 'Mouth', cebuano: 'Baba' },
          { english: 'Teeth', cebuano: 'Ngipen' },
          { english: 'Hand', cebuano: 'Kamay' },
          { english: 'Foot', cebuano: 'Paa' },
        ],
      },
      {
        id: 'numbers',
        name: 'Numbers',
        color: '#3498DB',
        words: [
          { english: 'One', cebuano: 'Usa' },
          { english: 'Two', cebuano: 'Duha' },
          { english: 'Three', cebuano: 'Tulo' },
          { english: 'Four', cebuano: 'Upat' },
          { english: 'Five', cebuano: 'Lima' },
          { english: 'Six', cebuano: 'Anim' },
          { english: 'Seven', cebuano: 'Pito' },
          { english: 'Eight', cebuano: 'Walo' },
        ],
      },
    ],
  };

  const [flipped, setFlipped] = useState({});

  const toggleFlip = (categoryId, wordIndex) => {
    const key = `${categoryId}-${wordIndex}`;
    setFlipped((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const resetAll = () => {
    setFlipped({});
  };

  return (
    <div className="vocab-container">
      <div className="vocab-max-width">
        <div className="vocab-header">
          <h1>Cebuano Words</h1>
          <button className="reset-button" onClick={resetAll}>
            <RotateCcw size={16} />
            Reset All
          </button>
        </div>

        {vocabularyData.categories.map((category) => (
          <div key={category.id} className="category-section">
            <h2 className="category-title" style={{ color: category.color }}>
              {category.name}
            </h2>

            <div className="words-grid">
              {category.words.map((word, idx) => {
                const key = `${category.id}-${idx}`;
                const isFlipped = flipped[key];

                return (
                  <button
                    key={idx}
                    className={`word-card ${isFlipped ? 'flipped' : ''}`}
                    onClick={() => toggleFlip(category.id, idx)}
                    style={{
                      borderColor: category.color,
                      backgroundColor: isFlipped ? category.color : 'white',
                      color: isFlipped ? 'white' : 'inherit',
                    }}
                  >
                    {isFlipped ? word.cebuano : word.english}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CebuanoVocab;
