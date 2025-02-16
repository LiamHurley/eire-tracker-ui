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
