#!/bin/bash

PROTO_SRC_DIR=../../proto
PROTO_DES_DIR=../../proto/generated

# Create the directory for generated files
mkdir -p $PROTO_DES_DIR
#mkdir -p $PROTO_SRC_DIR

# Get the absolute path to grpc_tools_node_protoc_plugin

GRPC_TOOLS_NODE_PROTOC_PLUGIN_JS_PATH=../node_modules/.bin/grpc_tools_node_protoc_plugin
GRPC_TOOLS_NODE_PROTOC_PLUGIN_TS_PATH=../node_modules/.bin/protoc-gen-ts

# Generate JavaScript code
npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DES_DIR} \
    --grpc_out=grpc_js:${PROTO_DES_DIR} \
    --plugin=protoc-gen-grpc=${GRPC_TOOLS_NODE_PROTOC_PLUGIN_JS_PATH} \
    -I ${PROTO_SRC_DIR} \
    ${PROTO_SRC_DIR}/*.proto

# Generate TypeScript code (d.ts)
npx grpc_tools_node_protoc \
    --plugin=protoc-gen-grpc=${GRPC_TOOLS_NODE_PROTOC_PLUGIN_TS_PATH} \
    --ts_out=${PROTO_DES_DIR} \
    -I ${PROTO_SRC_DIR} \
    ${PROTO_SRC_DIR}/*.proto
