
# DigiVaidya: AI Ayurvedic Doctor

## Overview

**DigiVaidya** is an innovative AI-powered Ayurvedic doctor, built using the ancient Ayurvedic textbook **Charak Samhita** as the core reference. Leveraging state-of-the-art AI technology, DigiVaidya offers accurate diagnostics and treatment plans based on centuries-old Ayurvedic wisdom. This project utilizes the **LlamaIndex** framework to create a **Retrieval Augmented Generation (RAG)** pipeline, training the **llama-2-70b-chat** model by Meta on the Charak Samhita.


## Table of Contents

1. [Overview](#overview)
2. [What is Retrieval Augmented Generation (RAG)?](#what-is-retrieval-augmented-generation-rag)
3. [About Charak Samhita](#about-charak-samhita)
4. [Model Description](#model-description)
5. [Tech Stack](#tech-stack)
6. [Demo](#demo)
7. [Installation](#installation)
8. [Usage](#usage)
9. [Contributing](#contributing)
10. [License](#license)

## What is Retrieval Augmented Generation (RAG)?

**Retrieval Augmented Generation (RAG)** is an advanced method that combines the strengths of retrieval-based and generation-based models. The RAG pipeline first retrieves relevant documents or data chunks from a large corpus based on a user query. It then generates a coherent response by leveraging both the retrieved content and the language model's generative capabilities. This approach ensures that the generated responses are both accurate and contextually relevant.

![RAG Pipeline]
<img width="1449" alt="Screenshot 2024-08-29 at 12 47 35 AM" src="https://github.com/user-attachments/assets/d914ce79-476b-4b55-b32e-4e8671c03a08">
<img width="971" alt="Screenshot 2024-08-29 at 12 49 28 AM" src="https://github.com/user-attachments/assets/d881ff86-4ab8-49a6-aa01-6a76878fca35">
<img width="808" alt="Screenshot 2024-08-29 at 12 44 14 AM" src="https://github.com/user-attachments/assets/f49311e1-571f-4932-ba5a-f250f4b2e1c7">


## About Charak Samhita

The **Charak Samhita** is one of the oldest and most comprehensive ancient texts on Ayurveda, attributed to the ancient Indian scholar **Charaka**. This ancient medical treatise is considered the foundation of Ayurvedic medicine, detailing various treatments, medical ethics, and principles of diagnosis and therapy. For more information, refer to the [Wikipedia page on Charak Samhita](https://en.wikipedia.org/wiki/Charaka_Samhita).


## Model Description

For this project, the **llama-2-70b-chat** model by Meta was used. This model is designed for high-quality natural language understanding and generation, trained on a diverse range of text data to perform exceptionally well in various NLP tasks. When integrated with the Charak Samhita using the RAG pipeline, the model provides insightful and accurate Ayurvedic medical advice.

For more details on the Llama-2-70b-chat model, refer to its [documentation on Replicate](https://replicate.com/meta/llama-2-70b-chat/readme).

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Python, Flask
- **Framework:** LlamaIndex
- **AI Model:** llama-2-70b-chat by Meta
- **Database:** Vector Database for embeddings

## Demo

Check out the working demo of DigiVaidya in action:


https://github.com/user-attachments/assets/08a04499-8bec-4028-8cbd-0b79a9b17b6d




## Installation

To set up DigiVaidya locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/DigiVaidya.git
   cd DigiVaidya
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application:**
   ```bash
   flask run
   ```

4. **Access the application:**
   Open your browser and go to `http://localhost:5000`

## Usage

- **Enter symptoms:** Type in your symptoms and receive Ayurvedic diagnostics and treatment plans.
- **View treatment plans:** Get detailed plans based on Ayurvedic principles.
- **Explore Charak Samhita:** Access explanations and references from the Charak Samhita text.

## Contributing

We welcome contributions! Please fork the repository and submit a pull request to propose changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
