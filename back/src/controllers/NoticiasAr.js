import axios from 'axios';

//https://newsapi.org/v2/top-headlines?country=ar&apiKey=d4733bbae3e34bb5ba6f5ce4991a3841

export const getNoticias = async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=d4733bbae3e34bb5ba6f5ce4991a3841');
        const data = response.data;

        // Extract and map the relevant properties from each article
        const articles = data.articles.map(article => ({
            author: article.author,
            title: article.title,
            url: article.url,
            publishedAt: article.publishedAt
        }));

        // Send the filtered articles as a JSON response
        res.status(200).json(articles);
    } catch (error) {
        console.error('Error fetching news:', error);

        // Send an error response
        res.status(500).json({
            message: 'Error fetching news',
            error: error.message,
        });
    }
};
