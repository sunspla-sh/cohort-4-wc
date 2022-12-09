import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';



function CountryDetails(props){

  const { id } = useParams();

  const [myCountry, setMyCountry] = useState(null);

  useEffect(() => {
    const foundCountry = props.countries.filter(singleCountry => singleCountry.alpha3Code === id);
    console.log(foundCountry)
    setMyCountry(foundCountry[0]);
  }, [id, props.countries])

  return (
    <>
      {myCountry ? (
        <div className="col-7">
          <h1>{myCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{
                  width: '30%'
                }}>Capital</td>
                <td>{myCountry.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {myCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {myCountry.borders.map(singleBorder => {
                      return <li><Link to={`/${singleBorder}`}>{singleBorder}</Link></li>
                    })}
                    
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : <p>loading...</p>}
    </>
  );

}

export default CountryDetails;