// @ts-nocheck
sap.ui.define(
    ["./BaseController", "cmis", "sap/m/MessageBox"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, cmis, MessageBox) {
        "use strict";

        return Controller.extend("com.sap.cmissearch4.controller.MainView", {
            onInit: function () {
                // console.log(chartjs.version);
            },
            pressButton: function(){
                let session = new cmis.CmisSession('/sdi/browser');
                session.setToken("Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vaWFjYXBqLmF1dGhlbnRpY2F0aW9uLmV1MTAuaGFuYS5vbmRlbWFuZC5jb20vdG9rZW5fa2V5cyIsImtpZCI6ImRlZmF1bHQtand0LWtleS0zNzI4NzA1MDUiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIyYjdkMzEwMmRiNWM0NjUxYTVhYmY0NTA2MGU3ZTFlOSIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiIwNjU5MGQ4Ny05YWZmLTQ0MTUtYWZlZC02NTlmN2E4NGNiZjkiLCJ6ZG4iOiJpYWNhcGoiLCJzZXJ2aWNlaW5zdGFuY2VpZCI6IjIwNjM5MDA0LWQ5MTAtNGRlYy1hNGQ4LTc4NzA4MzYxN2IwZiJ9LCJzdWIiOiJzYi0yMDYzOTAwNC1kOTEwLTRkZWMtYTRkOC03ODcwODM2MTdiMGYhYjEwODAxOHxzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQiLCJhdXRob3JpdGllcyI6WyJ1YWEucmVzb3VyY2UiLCJzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQuc2RtYnVzaW5lc3NhZG1pbiIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NC5zZG1hZG1pbiIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NC5zZG11c2VyIiwic2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0LnNkbW1pZ3JhdGlvbmFkbWluIl0sInNjb3BlIjpbInVhYS5yZXNvdXJjZSIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NC5zZG1idXNpbmVzc2FkbWluIiwic2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0LnNkbXVzZXIiLCJzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQuc2RtbWlncmF0aW9uYWRtaW4iLCJzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQuc2RtYWRtaW4iXSwiY2xpZW50X2lkIjoic2ItMjA2MzkwMDQtZDkxMC00ZGVjLWE0ZDgtNzg3MDgzNjE3YjBmIWIxMDgwMTh8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0IiwiY2lkIjoic2ItMjA2MzkwMDQtZDkxMC00ZGVjLWE0ZDgtNzg3MDgzNjE3YjBmIWIxMDgwMTh8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0IiwiYXpwIjoic2ItMjA2MzkwMDQtZDkxMC00ZGVjLWE0ZDgtNzg3MDgzNjE3YjBmIWIxMDgwMTh8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0IiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIyMTI5NzQxMyIsImlhdCI6MTY3MTE2MTIxMSwiZXhwIjoxNjcxMjA0NDExLCJpc3MiOiJodHRwczovL2lhY2Fwai5hdXRoZW50aWNhdGlvbi5ldTEwLmhhbmEub25kZW1hbmQuY29tL29hdXRoL3Rva2VuIiwiemlkIjoiMDY1OTBkODctOWFmZi00NDE1LWFmZWQtNjU5ZjdhODRjYmY5IiwiYXVkIjpbInVhYSIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NCIsInNiLTIwNjM5MDA0LWQ5MTAtNGRlYy1hNGQ4LTc4NzA4MzYxN2IwZiFiMTA4MDE4fHNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NCJdfQ.DYwZ2bzhTOMVfUonDy32Z3qjAKvlpjJyiNmufu_HUVc7jE4iVa-wAoDPSXi1RYHeeLHKUOA-zIIVSWQkxKBrB6nFfO4TIgfZt1eFmJwsd1PfFp79_5oS0E9_kdBSL0zSW4WDMlny5XBVNzsa5W7WvXRbBMcg9SKpaU00pXlIovcoIzxv6-vsXUlvwgAUDfv5hCbmr4CExMh16ieTMHx2E6wz3xpHPq8qYtufzok6yEmK4PTOLsTxP4bJJxSx0jdGqWTnjURKh2P0670d7vZzA7sn76-7iaUvT2_oHZE7uwClN-y53B6BKv2aZlmDPf6drkWKJQOhm9maXU1o3Kf7Wg")
                .loadRepositories().then(data=>{
MessageBox.information(JSON.stringify(data));
                })
            }
        });
    }
);
