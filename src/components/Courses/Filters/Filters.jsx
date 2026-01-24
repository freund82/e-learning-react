import "./filters.css";

function Filters({coursesCategoryFilter, courses}) {
   console.log(coursesCategoryFilter);

   const entries = Object.entries(coursesCategoryFilter);
   
    return (
        <div>
                {entries.map(([name, count]) => 
                <div key={name}>
                    <input type="checkbox" id={name} name={name} />
                    <label htmlFor={name}>{name} {count}</label>
                </div>)}
        
        </div>
    );
}

export default Filters;