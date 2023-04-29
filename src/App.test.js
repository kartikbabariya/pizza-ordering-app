import { render, fireEvent } from '@testing-library/react';

describe('IngredientList', () => {
  test('when the checkbox is selected, the ingredient should be added to the list.', () => {

    // Arrange
    const availableIngredients = ['Pepperoni',
      'mushroom',
      'Onions',
      'Green peppers',
      'tomato_thumbnail',
      'pedrons_thumbnail',
      'Black olives',
      'Extra cheese'];


    const handleIngredientChange = jest.fn();
    const { getByLabelText, getByText } = render(
      <div>
        <div>
          <h3>Available Ingredients</h3>
          {availableIngredients.map((ingredient, index) => (
            <div key={index}>
              <input type="checkbox" value={ingredient} onChange={handleIngredientChange} aria-label={`Select ${ingredient}`} />
              <label>{ingredient}</label>
            </div>
          ))}
        </div>
        <div>
          <h3>Selected Ingredients</h3>
          <div className="row">
            {/* no selected ingredients initially */}
          </div>
        </div>
      </div>
    );
    const mushroomCheckbox = getByLabelText('Select mushroom');

    // Act
    fireEvent.click(mushroomCheckbox);

    // Assert
    expect(handleIngredientChange).toHaveBeenCalledTimes(1);
    expect(handleIngredientChange).toHaveBeenCalledWith(expect.any(Object));
    expect(getByText('Selected Ingredients')).toBeInTheDocument();
    expect(getByText('mushroom')).toBeInTheDocument();
  });

  test('when the checkbox is unchecked, the ingredient from the list should be removed.', () => {
    // Arrange
    const availableIngredients = ['Pepperoni',
      'mushroom',
      'Onions',
      'Green peppers',
      'tomato_thumbnail',
      'pedrons_thumbnail',
      'Black olives',
      'Extra cheese'];
    const handleIngredientChange = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <div>
        <div>
          <h3>Available Ingredients</h3>
          {availableIngredients.map((ingredient, index) => (
            <div key={index}>
              <input type="checkbox" value={ingredient} onChange={handleIngredientChange} aria-label={`Select ${ingredient}`} />
              <label>{ingredient}</label>
            </div>
          ))}
        </div>
        <div>
          <h3>Selected Ingredients</h3>
          <div className="row">
            {/* no selected ingredients initially */}
          </div>
        </div>
      </div>
    );
    const mushroomCheckbox = getByLabelText('Select mushroom');

    // Act
    fireEvent.click(mushroomCheckbox);
    fireEvent.click(mushroomCheckbox);

    // Assert
    expect(handleIngredientChange).toHaveBeenCalledTimes(2);
    expect(handleIngredientChange).toHaveBeenCalledWith(expect.any(Object));
    expect(getByText('Available Ingredients')).toBeInTheDocument();
    expect(queryByText('mushroom')).not.toBeInTheDocument();
  });

  test('when no ingredients are chosen, a message ought to be displayed.', () => {
    // Arrange
    const availableIngredients = ['Pepperoni',
      'mushroom',
      'Onions',
      'Green peppers',
      'tomato_thumbnail',
      'pedrons_thumbnail',
      'Black olives',
      'Extra cheese'];
    const handleIngredientChange = jest.fn();
    const { getByText } = render(
      <div>
        <div>
          <h3>Available Ingredients</h3>
          {availableIngredients.map((ingredient, index) => (
            <div key={index}>
              <input type="checkbox" value={ingredient} onChange={handleIngredientChange} aria-label={`Select ${ingredient}`} />
              <label>{ingredient}</label>
            </div>
          ))}
        </div>
        <div>
          <h3>Selected Ingredients</h3>
          <div className="row">
            {/* no selected ingredients initially */}
          </div>
        </div>
      </div>
    );

    // Assert
    expect(getByText('No ingredients selected.')).toBeInTheDocument();
  });

});


describe('Pizza Sauce', () => {
  test('should render "Tomato Base" as selected by default', () => {
    // Arrange
    const { getByLabelText } = render(
      <div>
        <h3>Select Pizza Sauce</h3>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Tomato Base
          </label>
        </div>
      </div>
    );
    const tomatoBaseRadio = getByLabelText('Tomato Base');

    // Assert
    expect(tomatoBaseRadio).toBeInTheDocument();
    expect(tomatoBaseRadio.checked).toBe(true);
  });

  test('should allow the user to select a different pizza sauce', () => {
    // Arrange
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <div>
        <h3>Select Pizza Sauce</h3>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="tomato" onChange={handleChange} />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Tomato Base
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="pesto" onChange={handleChange} />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Pesto Base
          </label>
        </div>
      </div>
    );
    const pestoRadio = getByLabelText('Pesto Base');

    // Act
    fireEvent.click(pestoRadio);

    // Assert
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    expect(getByLabelText('Pesto Base')).toBeChecked();
  });

})

describe('CheeseSelection', () => {
  test('when checkbox is selected, add selected Cheese to list.', () => {
    // Arrange
    const availableCheese = ['Cheddar', 'Mozzarella', 'Parmesan', 'Swiss'];
    const handleIngredientChange = jest.fn();
    const { getByLabelText, getByText } = render(
      <div>
        <h3>Select Cheese</h3>
        {availableCheese.map((Cheese, index) => (
          <div className="form-check" key={index}>
            <input className="form-check-input" type="checkbox" value={Cheese} onChange={handleIngredientChange} aria-label={`Select ${Cheese}`} />
            <label className="form-check-label" for="flexCheckDefault">{Cheese}</label>
          </div>
        ))}
      </div>
    );
    const cheddarCheckbox = getByLabelText('Select Cheddar');

    // Act
    fireEvent.click(cheddarCheckbox);

    // Assert
    expect(handleIngredientChange).toHaveBeenCalledTimes(1);
    expect(handleIngredientChange).toHaveBeenCalledWith(expect.any(Object));
    expect(getByText('Selected Cheese')).toBeInTheDocument();
    expect(getByText('Cheddar')).toBeInTheDocument();
  });

  test('when the checkbox is cleared, the selected Cheese should be removed from the list.', () => {
    // Arrange
    const availableCheese = ['Cheddar', 'Mozzarella', 'Parmesan', 'Swiss'];
    const handleIngredientChange = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <div>
        <h3>Select Cheese</h3>
        {availableCheese.map((Cheese, index) => (
          <div className="form-check" key={index}>
            <input className="form-check-input" type="checkbox" value={Cheese} onChange={handleIngredientChange} aria-label={`Select ${Cheese}`} />
            <label className="form-check-label" for="flexCheckDefault">{Cheese}</label>
          </div>
        ))}
        <div>
          <h3>Selected Cheese</h3>
          <div className="row">
            <div className='col-6'>
              <label>Cheddar</label>
            </div>
          </div>
        </div>
      </div>
    );
    const cheddarCheckbox = getByLabelText('Select Cheddar');

    // Act
    fireEvent.click(cheddarCheckbox);

    // Assert
    expect(handleIngredientChange).toHaveBeenCalledTimes(1);
    expect(handleIngredientChange).toHaveBeenCalledWith(expect.any(Object));
    expect(queryByText('Cheddar')).toBeNull();
  });

})