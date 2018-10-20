export function toStringName(name){
    return `${name.first} ${name.last}`;
}

export function formatDate(dateString){
    let date = new Date(dateString);
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
};

export function filterDrivers(drivers, nameFilter, ageFilter){
    if(nameFilter !== ''){
        drivers = drivers.filter(driver=> {
            let fullName = toStringName(driver.name);
            fullName = fullName.toLowerCase();
            return fullName.includes(nameFilter.toLowerCase());
        });
    }
    if(ageFilter !== ''){
        drivers = drivers.filter(driver=> {
            return driver.age.toString().includes(ageFilter);
        });
    }
    return drivers;
}