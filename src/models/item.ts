interface ItemI{
    address: string,
    benefits: string[],
    createdAt: string,
    description: string,
    email: string,
    employment_type: string[],
    id: string,
    location: {
        lat: number,
        long: number,
    },
    name: string,
    phone: string,
    pictures: string[],
    salary: string,
    title: string,
    updateAt: string
}

export default ItemI;