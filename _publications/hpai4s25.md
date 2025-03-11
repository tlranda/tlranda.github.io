---
layout: publication
title: "Is In-Context Learning Feasible for HPC Performance Autotuning?"
pub_order: 5
date: 2025-06-04
authors: Thomas Randall, Akhilesh Bondapalli, Rong Ge, and Prasanna Balaprakash
conference: "HPAI4S'25"
conference_full: "HPC for AI Foundation Models & LLMs for Science 2025"
acm: false
paper: "/Media/ICL_HPC_Autotuning/ICL_HPC_Autotuning.pdf"
source: "https://github.com/tlranda/LM-Peel"
abstract: "We examine whether in-context learning with Large Language Models (LLMs) can effectively address the challenges of High-Performance Computing (HPC) autotuning. LLMs have demonstrated remarkable natural language processing and artificial intelligence (AI) capabilities, sparking interest in their application across various domains, including HPC. Performance autotuning -- the process of automatically optimizing system configurations to maximize efficiency through empirical evaluation -- offers significant promise for enhancing application performance on larger systems and emerging architectures. However, this process remains computationally expensive due to the combinatorial explosion of configuration parameters and the complex, nonlinear relationships between configurations and performance outcomes.

We pose a critical question: Can LLMs, without task-specific fine-tuning, accurately infer performance-configuration patterns by combining in-context examples with latent knowledge? To explore this, we leverage empirical performance data from real-world HPC systems, designing structured prompts and queries to evaluate LLMs' capabilities. Our experiments reveal inherent limitations in applying in-context learning to performance autotuning, particularly for tasks requiring precise mathematical reasoning and analysis of complex multivariate dependencies. We provide empirical evidence of these shortcomings and discuss potential research directions to overcome these challenges."
short_abstract: "We examine whether in-context learning with Large Language Models (LLMs) can effective address the challenges of High-Performance Computing (HPC) autotuning. "
more_abstract: "LLMs have demonstrated remarkable natural language processing and artificial intelligence (AI) capabilities, sparking interest in their application across various domains, including HPC. Performance autotuning -- the process of automatically optimizing system configurations to maximize efficiency through empirical evaluation -- offers significant promise for enhancing application performance on larger systems and emerging architectures. However, this process remains computationally expensive due to the combinatorial explosion of configuration parameters and the complex, nonlinear relationships between configurations and performance outcomes.

We pose a critical question: Can LLMs, without task-specific fine-tuning, accurately infer performance-configuration patterns by combining in-context examples with latent knowledge? To explore this, we leverage empirical performance data from real-world HPC systems, designing structured prompts and queries to evaluate LLMs' capabilities. Our experiments reveal inherent limitations in applying in-context learning to performance autotuning, particularly for tasks requiring precise mathematical reasoning and analysis of complex multivariate dependencies. We provide empirical evidence of these shortcomings and discuss potential research directions to overcome these challenges."
key_image: "/Media/ICL_HPC_Autotuning/curated_syr2k_SM_100_round_3.png"
key_image_alt_text: "A plot shows high variability in generated numbers from LLMs based on available in-context learning data."
---
