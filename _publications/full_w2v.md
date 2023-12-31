---
layout: publication
title: "FULL-W2V: Fully Exploiting Data Reuse for W2V on GPU-Accelerated Systems"
doi: "https://doi.org/10.1145/3447818.3460373"
date: 2021-06-04
authors: Thomas Randall, Tyler Allen, and Rong Ge
conference: "ICS'21"
conference_full: "Proceedings of the 2021 International Conference on Supercomputing (ICS '21)"
acm: true
electives: "Best Paper"
paper: "/Media/FULL_W2V/FULL-W2V.pdf"
source: "https://github.com/tlranda/FULL-W2V"
slides: "/Media/FULL_W2V/FULL-W2V-ICS_21.pdf"
link_videos: "https://github.com/tlranda/tlranda.github.io/raw/gh-pages/Media/FULL_W2V/FULL-W2V_short.mp4,https://github.com/tlranda/tlranda.github.io/raw/gh-pages/Media/FULL_W2V/FULL-W2V_ext.mp4"
videos: "/Media/FULL_W2V/FULL-W2V_short.mp4,/Media/FULL_W2V/FULL-W2V_ext.mp4"
abstract: "Word2Vec remains one of the highly-impactful innovations in the field of Natural Language Processing (NLP) that represents latent grammatical and syntactical information in human text with dense vectors in a low dimension. Word2Vec has high computational cost due to the algorithm's inherent sequentiality, intensive memory accesses, and the large vocabularies it represents. While prior studies have investigated technologies to explore parallelism and improve memory system performance, they struggle to effectively gain throughput on powerful GPUs. We identify memory data access and latency as the primary bottleneck in prior works on GPUs, which prevents highly optimized kernels from attaining the architecture's peak performance. We present a novel algorithm, FULL-W2V, which maximally exploits the opportunities for data reuse in the W2V algorithm and leverages GPU architecture and resources to reduce access to low memory levels and improve temporal locality. FULL-W2V is capable of reducing accesses to GPU global memory significantly, e.g., by more than 89%, compared to prior state-of-the-art GPU implementations, resulting in significant performance improvement that scales across successive hardware generations. Our prototype implementation achieves 2.97X speedup when ported from Nvidia Pascal P100 to Volta V100 cards, and outperforms the state-of-the-art by 5.72X on V100 cards with the same embedding quality. In-depth analysis indicates that the reduction of memory accesses through register and shared memory caching and high-throughput shared memory reduction leads to a significantly improved arithmetic intensity. FULL-W2V can potentially benefit many applications in NLP and other domains."
short_abstract: "Word2Vec remains one of the highly-impactful innovations in the field of Natural Language Processing (NLP) that represents latent grammatical and syntactical information in human text with dense vectors in a low dimension. Word2Vec has high computational cost due to the algorithm's inherent sequentiality, intensive memory accesses, and the large vocabularies it represents. While prior studies have investigated technologies to explore parallelism and improve memory system performance, they struggle to effectively gain throughput on powerful GPUs."
more_abstract: " We identify memory data access and latency as the primary bottleneck in prior works on GPUs, which prevents highly optimized kernels from attaining the architecture's peak performance. We present a novel algorithm, FULL-W2V, which maximally exploits the opportunities for data reuse in the W2V algorithm and leverages GPU architecture and resources to reduce access to low memory levels and improve temporal locality. FULL-W2V is capable of reducing accesses to GPU global memory significantly, e.g., by more than 89%, compared to prior state-of-the-art GPU implementations, resulting in significant performance improvement that scales across successive hardware generations. Our prototype implementation achieves 2.97X speedup when ported from Nvidia Pascal P100 to Volta V100 cards, and outperforms the state-of-the-art by 5.72X on V100 cards with the same embedding quality. In-depth analysis indicates that the reduction of memory accesses through register and shared memory caching and high-throughput shared memory reduction leads to a significantly improved arithmetic intensity. FULL-W2V can potentially benefit many applications in NLP and other domains."
key_image: "/Media/FULL_W2V/1bw.png"
key_image_alt_text: "One set of benchmark results indicate that FULL-W2V produces 1.13X speedup using a P100 GPU over prior SOTA using V100 GPU, increasing up to 4.35X speedup when FULL-W2V runs on the V100 architecture."
arxiv: "https://arxiv.org/abs/2312.07743"
---

