export type Sort = {
    sort: string;
    name: string;
}

type IMG = {
    attributes: {
        url: string;
    }
}

export type Button = {
    label: string;
}

export type Dates = {
    day: string;
    month: string;
}

export type UserInfo = {
    picture: string;
    logged: boolean
}

export type SectionItems = {
    id?: number;
    attributes: {
        title: string;
        pretitle: string;
        description: string;
        img?: {
            data: IMG[]
        };
        Button: Button[];
    }
}

export type ShopItems = {
    id?: number;
    count: number;
    attributes: {
        title: string;
        description: string;
        price: number;
        img?: {
            data: IMG[]
        };
        Button: Button;
    }
}

export type CartItems = {
    id?: number;
    count: number;
    attributes: {
        title: string;
        description: string;
        price: number;
        img?: {
            data: IMG[]
        };
        Button: Button;
    }
}

export type FavouriteItems = {
    id?: number;
    count: number;
    attributes: {
        title: string;
        description: string;
        price: number;
        img?: {
            data: IMG[]
        };
        Button: Button;
    }
}

export type Soon = {
    id?: string;
    attributes: {
        title: string;
        description: string;
        Date: Dates;
        img?: {
            data: IMG[]
        };
    }
}