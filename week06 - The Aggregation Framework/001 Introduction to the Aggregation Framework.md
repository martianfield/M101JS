# 001 Introduction to the Aggregation Framework

Allows to run various types of reports or analysis on documents in one or more mongo collections.

The AF is based on the concept of a pipeline.

We take input from a collection and pass that input through one to n stages. Each stage executes an operation on its input and passes its output to the next stage.

The input and output of each stage is a (stream of) document(s).

At the end of the pipeline we get access to the output of the last stage.

## Stages

A stage in the pipeline is a data processing unit. It receives data in the shape of a stream (one at a tiem) of documents, processes each and passes the processed documents on as a stream of documents.

Each stage is capable of doing a generic task and can be parameterized to execute a specific 'version' of this task. Those parameters are also called 'tuneables' and usually take the form of operators that we supply and that modify fields, perform mathematical operations, reshape documents, or do some sort of accumulation task, etc.

## Repeated Stages

Quite frequently it is the case that the same type of stage appears multiple times within a pipeline. E.g. we want to initially apply a filter, then do something with the documents in the next stage, and then apply that initial filter again (with a different set of criteria).