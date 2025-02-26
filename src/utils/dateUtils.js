export const calculateAge = (dateOfBirth) => {
    const [day, month, year] = dateOfBirth.split('/');

    const birthDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};

export const getCurrentYear = () => {
    const today = new Date();
    const year = today.getFullYear();

    if (today.getMonth() < 6) {
        return `${(year - 1) % 100}/${year % 100}`;
    } else {
        return `${year % 100}/${(year + 1) % 100}`;
    }
}