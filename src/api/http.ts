import http from "../axios/axios";

export interface ApiResponse<T> {
    data: T;
}
export const getAPI = async <T>(endpoint: string, params = {}): Promise<ApiResponse<T> | undefined> => {
    try {
        const response = await http.get(endpoint, { params });
        return response.data as ApiResponse<T>;
    } catch (error) {
        handleApiError(error);
    }
};


export const postAPI = async <T>(endpoint: string, data: any): Promise<ApiResponse<T> | undefined> => {
    try {
        const response = await http.post(endpoint, data);
        return response.data as ApiResponse<T>;
    } catch (error) {
        handleApiError(error);
    }
};


export const putAPI = async <T>(endpoint: string, data: any): Promise<ApiResponse<T> | undefined> => {
    try {
        const response = await http.put(endpoint, data);
        return response.data as ApiResponse<T>;
    } catch (error) {
        handleApiError(error);
    }
};

export const deleteAPI = async <T>(endpoint: string, data: any): Promise<ApiResponse<T> | undefined> => {
    try {
        const response = await http.delete(endpoint, data);
        return response.data as ApiResponse<T>;
    } catch (error) {
        handleApiError(error);
    }
};


const handleApiError = (error: any): never => {
    if (error instanceof Error) {
        throw new Error(error.message);
    } else {
        throw new Error('Unknown error occurred.');
    }
};
