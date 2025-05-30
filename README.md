# Análise Bioinformática do Gene KRAS

Este projeto consiste numa página web desenvolvida para apresentar os resultados de uma análise bioinformática focada no gene KRAS. O trabalho foi realizado no âmbito da Unidade Curricular de Laboratórios de Bioinformática da Licenciatura em Bioinformática da Universidade do Porto.

## Autores

*   Artur Anselmo
*   João Simões
*   Marcos Torres

**Docentes:** Prof. Miriam Santos & Prof. Pedro G. Ferreira
**Ano Letivo:** 2024/2025

## Sobre o Projeto

A página web (`index.html`) serve como um relatório interativo e visual da nossa investigação sobre o gene KRAS. O KRAS é um proto-oncogene crucial na regulação celular, e as suas mutações estão frequentemente associadas ao desenvolvimento de diversos tipos de cancro.

Este projeto aborda:
1.  **Introdução ao Gene KRAS:** Função biológica e caracterização do gene e da proteína.
2.  **Metodologia e Resultados:**
    *   **Pesquisa de Homólogos:** Utilização do BLASTp para identificar proteínas KRAS homólogas noutras espécies.
    *   **Alinhamento Múltiplo de Sequências (MSA):** Análise de regiões conservadas entre os homólogos com o Clustal Omega.
    *   **Construção de Árvore Filogenética:** Inferência das relações evolutivas entre as sequências KRAS analisadas e visualização (por exemplo, com iTOL).
3.  **Discussão:** Interpretação dos resultados, destacando a conservação funcional do KRAS e as relações evolutivas observadas.
4.  **Dificuldades e Conclusão:** Reflexão sobre os desafios encontrados e as principais conclusões do estudo.

## Estrutura da Página Web

A página é uma *single-page application* (SPA) construída com HTML, CSS e JavaScript, apresentando as seguintes secções:

*   **Início:** Secção de boas-vindas com uma breve descrição do projeto.
*   **Sobre o KRAS:** Informação detalhada sobre o gene.
*   **Resultados:** Apresentação dos achados das análises bioinformáticas (BLASTp, MSA, Árvore Filogenética) em formato de cards. As imagens dos resultados podem ser ampliadas para melhor visualização.
*   **Discussão:** Interpretação dos resultados e conclusões.
*   **Grupo:** Informação sobre os autores e a unidade curricular.

## Conteúdo dos Ficheiros

*   `index.html`: Ficheiro principal contendo toda a estrutura HTML, estilos CSS embutidos e código JavaScript.
*   `blast-icon.png`: Imagem para o card do BLASTp.
*   `msa_kras_thumbnail.png`: Imagem de exemplo do alinhamento múltiplo.
*   `Imagens`: Resultados e estéticas

## Como Visualizar

Basta abrir o ficheiro `index.html` num navegador web moderno.
