import React from 'react'

const Nutrition = () => {
  const data = [
  { id: 1, ct: "Calories", amount: "277kcal"},
  { id: 2, ct: "Carbs", amount: "0g"},
  { id: 3, ct: "Protein", amount: "20g"},
  { id: 4, ct: "Fat", amount : "22g"}
]
  return (
    <div className='Nutrition'>
      <h2>Nutrition</h2>
      <p>The table below shows nutrition values per serving without the additional fillings</p>
      <table>
        <tbody>
          {data.map(info => (
            <tr key={info.id}>
              <td className='ct'>{info.ct}</td>
              <td className='amount'>{info.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Nutrition
