# A1_Thats_What_I_Like
## Task 2:
1. The Word2Vector and Glove models were trained with different window sizes to analyze the effect of window size on training. It can be seen from all the trainings with different window sizes that as the window size is increased the training loss is decreased. 
Comparing the training time the Word2Vector took around 15 minutes to train with all window sizes where as Glove was effecient which took only 7 minutes to train. 
Furhtermore, the models were trained with 500 epochs only.

| Model            | Window Size | Training Loss | Training Time | Syntactic Accuracy | Semantic Accuracy |
|------------------|-------------|---------------|---------------|---------------------|--------------------|
| Skipgram         |   1         | 10.260798     |  0m 0s        | 0.00%               | 0.00%              |
| Skipgram         |   2         | 9.778402      |  0m 1s        | 0.00%               | 0.00%              |
| Skipgram         |   4         | 9.786381      |  0m 0s        | 0.00%               | 0.00%              |
| Skipgram         |   5         | 9.792381      |  0m 0s        | 0.00%               | 0.00%              |
| Skipgram         |   6         | 9.667727      |  0m 1s        | 0.00%               | 0.00%              |
| Skipgram         |   8         | 9.560391      |  0m 0s        | 0.00%               | 0.00%              |
| Skipgram (NEG)   |   2         | 1.956091      |  0m 0s        | 0.00%               | 0.00%              |
| Skipgram (NEG)   |   4         | 1.811992      |  0m 0s        | 0.00%               | 0.00%              |
| Skipgram (NEG)   |   5         | 1.663925      |  0m 0s        | 0.00%               | 0.00%              |
| Skipgram (NEG)   |   6         | 1.697915      |  0m 0s        | 0.00%               | 0.00%              |
| Skipgram (NEG)   |   8         | 1.583175      |  0m 0s        | 0.00%               | 0.00%              |
| Skipgram (NEG)   |  10         | 1.578345      |  0m 0s        | 0.00%               | 0.00%              |
| Glove            |  2          | 483.625458    |  0m 0s        | 0.00%               | 0.00%              |
| Glove            |  4          | 376.340271    |  0m 0s        | 0.00%               | 0.00%              |
| Glove            |  5          | 279.339050    |  0m 0s        | 0.00%               | 0.00%              |
| Glove            |  6          | 266.809937    |  0m 0s        | 0.00%               | 0.00%              |
| Glove            |  8          | 272.277740    |  0m 0s        | 0.00%               | 0.00%              |
| Glove            | 10          | 216.145660    |  0m 0s        | 0.00%               | 0.00%              |
| Glove (Gensim)   | -           | -             |  0m 0s        | 0.00%               | 0.00%              |


## Task 3:
| Model | Skipgram | NEG | GloVe | GloVe (gensim) | Y_true |
|-------|----------|-----|-------|----------------|--------|
| MSE   | 29.75    |29.03|29.19  | 23.8484        | 3.94   |

## Task 4
The website is created with Flask(Backend) and Reactjs & Tailwindcss(Frontend)
Demonstration of website. https://drive.google.com/file/d/1SO0Hw6mok6LXqrE4FqN39DChYS7ABPmj/view?usp=sharing



