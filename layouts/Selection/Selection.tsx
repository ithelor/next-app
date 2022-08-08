import React from 'react'

import { ButtonIcon, ButtonPrimary, Search, SelectionEntry } from 'components'

import { useProductsStore } from 'lib/RootStoreContext'

import MinusIcon from 'public/minus.svg'
import PlusIcon from 'public/plus.svg'

import * as S from './styles'

interface IFurniture {
  title: string
  img: string
}

const furniture: IFurniture[] = [
  {
    title: 'Стул',
    img: 'https://cgifurniture.com/wp-content/uploads/2019/12/furniture-rendering-leather-chair-1030x1030.jpg'
  },
  {
    title: 'Стол',
    img: 'https://cgifurniture.com/wp-content/uploads/2021/05/custom-rendering-luxurious-table-1030x1030.jpg'
  },
  {
    title: 'Кресло',
    img: 'https://cgifurniture.com/wp-content/uploads/2019/12/furniture-rendering-armchair-design-1030x1030.jpg'
  },
  {
    title: 'Софа',
    img: 'https://cgifurniture.com/wp-content/uploads/2022/07/sofa060.webp'
  },
  {
    title: 'Кровать',
    img: 'https://cgifurniture.com/wp-content/uploads/2021/06/product-3d-visualization-better-bona-bed.png'
  }
]

export const Selection = () => {
  // handling search
  const [searchQuery, setSearchQuery] = React.useState('')
  const [searchResults, setSearchResults] = React.useState<IFurniture[]>(furniture)

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase())
    !event.target.value.toLowerCase() && setSearchResults(furniture)
  }

  const onSearchClick = () => {
    setSearchResults(furniture.filter((item) => item.title.toLowerCase().includes(searchQuery)))
  }

  // handling selection
  const [selection, setSelection] = React.useState<number | undefined>()

  const onSelect = (index: number) => {
    setSelection(index)
  }

  // handling inputs
  const productsStore = useProductsStore()
  const inputsRef = React.useRef<HTMLInputElement[]>([])

  const inputs = {
    quantity: inputsRef.current[0]?.valueAsNumber,
    volume: inputsRef.current[1]?.valueAsNumber,
    netto: inputsRef.current[2]?.valueAsNumber,
    brutto: inputsRef.current[3]?.valueAsNumber,
    price: inputsRef.current[4]?.valueAsNumber
  }

  const resetInputs = () => {
    inputsRef.current.forEach((input, index) =>
      index === 0 ? (input.value = '1') : (input.value = '')
    )
  }

  return (
    <S.Selection>
      <section className="select">
        <h2>Выберите мебель, которую нужно перевезти</h2>

        <Search onChange={onSearchChange} onSearch={onSearchClick} />

        <div className="scrollable">
          {searchResults.length === 0 ? (
            <h3>Не найдено</h3>
          ) : (
            searchResults.map((item, index) => (
              <SelectionEntry key={item.title} onSelect={() => onSelect(index)} variant="list">
                {item}
              </SelectionEntry>
            ))
          )}
        </div>
      </section>

      <section className="fill">
        <h2>Затем заполните следующие поля выбранного элемента:</h2>

        {selection === undefined ? (
          <h3>Вы не выбрали пока ни одного элемента.</h3>
        ) : (
          <>
            <SelectionEntry variant="selected">{furniture[selection]}</SelectionEntry>

            <span className="quantity">
              Кол-во:
              <div className="controls">
                <ButtonIcon
                  ariaLabel="Decrease"
                  onClick={() =>
                    inputsRef.current[0].valueAsNumber > 1 && inputsRef.current[0].valueAsNumber--
                  }
                >
                  {<MinusIcon />}
                </ButtonIcon>
                <input
                  ref={(element) => inputsRef.current.push(element!)}
                  type="number"
                  defaultValue={1}
                />
                <ButtonIcon
                  ariaLabel="Increase"
                  onClick={() => inputsRef.current[0].valueAsNumber++}
                >
                  {<PlusIcon />}
                </ButtonIcon>
              </div>
            </span>

            <fieldset>
              <input
                ref={(element) => inputsRef.current.push(element!)}
                type="number"
                placeholder="Объем, м3"
              />
              <input
                ref={(element) => inputsRef.current.push(element!)}
                type="number"
                placeholder="Общая масса нетто, кг"
              />
              <input
                ref={(element) => inputsRef.current.push(element!)}
                type="number"
                placeholder="Общая масса брутто, кг"
              />
              <input
                ref={(element) => inputsRef.current.push(element!)}
                type="number"
                placeholder="Стоимость одной единицы"
              />
            </fieldset>

            <span className="buttons">
              <ButtonPrimary ariaLabel="Reset" onClick={() => resetInputs()}>
                Сбросить
              </ButtonPrimary>
              <ButtonPrimary
                ariaLabel="Add"
                onClick={() =>
                  productsStore.addProduct({
                    ...inputs,
                    name: furniture[selection].title
                  })
                }
              >
                Добавить
              </ButtonPrimary>
            </span>
          </>
        )}
      </section>
    </S.Selection>
  )
}
