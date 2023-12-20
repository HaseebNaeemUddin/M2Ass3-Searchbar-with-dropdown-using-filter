
    let arr = [
        {
            brand: "Samsung",
            model: "SamsungA30",
            price: "40000",
            camera: "40px",
            ram: "8gb",
            rom : "128gb",
            
        },
        {
            brand: "Samsung",
            model: "SamsungA10",
            price: "40000",
            camera: "40px",
            ram: "4gb",
            rom : "128gb",
            
        },
        {
            brand: "Samsung",
            model: "SamsungA20",
            price: "40000",
            camera: "40px",
            ram: "4gb",
            rom : "128gb",
            
        },
        {
            brand: "Vivo",
            model: "VivoY20",
            price: "20000",
            camera: "40px",
            ram: "2gb",
            rom : "32gb",
            
        },
        {
            brand: "Vivo",
            model: "VivoY11",
            price: "20000",
            camera: "40px",
            ram: "3gb",
            rom : "32gb",
            
        },
        {
            brand: "Vivo",
            model: "VivoY15",
            price: "30000",
            camera: "40px",
            ram: "4gb",
            rom : "64gb",
            
        },
        {
            brand: "Motorola",
            model: "Motorola123",
            price: "5000",
            camera: "2px",
            ram: "2gb",
            rom : "32gb",
            
        },
        {
            brand: "Iphone",
            model: "Iphone12",
            price: "300000",
            camera: "40px",
            ram: "8gb",
            rom : "128gb",
            
        },
        {
            brand: "Iphone",
            model: "Iphone13",
            price: "300000",
            camera: "40px",
            ram: "8gb",
            rom : "128gb",
            
        },
        {
            brand: "Iphone",
            model: "IphoneX",
            price: "300000",
            camera: "40px",
            ram: "8gb",
            rom : "128gb",
            
        },
    ];

function filterMobilePhones() {
    const filterOption = document.getElementById("filterOption").value;
    const filterValue = document.getElementById("filterValue").value.toLowerCase();
    const mobileList = document.getElementById("mobileList");

    // Clear previous results
    mobileList.innerHTML = "";

    // Filter the array based on user input
    const filteredPhones = arr.filter(phone => {
        const valueToCompare = phone[filterOption].toLowerCase();
        return valueToCompare.includes(filterValue);
    });

    // Display filtered results
    filteredPhones.forEach(phone => {
        const li = document.createElement("li");
        li.textContent = `${phone.brand} - ${phone.model} - ${phone.price}`;
        mobileList.appendChild(li);
    });
}

