const url =
    process.env.NODE_ENV === "production"
        ? process.env.SERVER_URL
        : process.env.TEST_SERVER_URL;

const getBooks = async () => {
    const response = await fetch(`${url}/books`);
    const data = await response.json();
    return data;
};

const getBook = async (title) => {
    const response = await fetch(`${url}/books/667400340f9b5f3ac12fec9e`);
    const data = await response.json();
    return data;
};

const getChapters = async () => {
    const response = await fetch(`${url}/chapters/literature`);
    const data = await response.json();
    return data;
};

const getChapter = async (chapterName) => {
    const response = await fetch(
        `${url}/chapters/literature?chapterName=${chapterName}`
    );
    const data = await response.json();
    return data;
};

const getPlots = async (chapterName) => {
    const response = await fetch(
        `${url}/chapters/plot?chapterName=${chapterName}`
    );
    const data = await response.json();
    return data;
};

const getPlot = async (chapterName, sceneNubmer) => {
    const response = await fetch(
        `${url}/chapters/plot?chapterName=${chapterName}&sceneNumber=${sceneNubmer}`
    );
    const data = await response.json();
    return data;
};

const getEpilogues = async (chapterName) => {
    const response = await fetch(
        `${url}/chapters/epilogue?chapterName=${chapterName}`
    );
    const data = await response.json();
    return data;
};

const getEpilogue = async (chapterName, epilogue) => {
    const response = await fetch(
        `${url}/chapters/epilogue?title=${chapterName}&epilogue=${epilogue}`
    );
    const data = await response.json();
    return data;
};

const getCustomerDetails = async (token) => {
    const response = await fetch(`${url}/customer/verifyTkn/${token}`);
    const data = await response.json();
    return data;
};

const updateCustomerDetails = async (data, token) => {
    const response = await fetch(`${url}/customer/editCustomerDetails`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
};

const login = async (data) => {
    const response = await fetch(`${url}/customer/loginCustomer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
};

const forgotPassword = async (data) => {
    const response = await fetch(`${url}/customer/forgotPassword`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
};

const getLevel1 = async (customerId) => {
    const response = await fetch(
        `${url}/customer/raiseCommunityRequest/${customerId}`
    );
    const data = await response.json();
    return data;
};

export {
    getBooks,
    getBook,
    getChapters,
    getChapter,
    getPlots,
    getPlot,
    getEpilogues,
    getEpilogue,
    getCustomerDetails,
    updateCustomerDetails,
    login,
    forgotPassword,
    getLevel1,
};
