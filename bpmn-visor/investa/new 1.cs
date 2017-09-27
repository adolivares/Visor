<Services.WebMethod()> _
    Public Shared Function pmGetInfoTimbrado(ByVal cveSucursal As Integer, _
                                            ByVal Prefijo As String, _
                                            ByVal numFactura As Double, _
                                            ByVal idEmpre As String) As String

        Dim hsInfo As Hashtable
        Dim ds As Data.DataSet
        Dim sRES As String = ""

        Try

            hsInfo = New Hashtable
            hsInfo.Add("@cveSucursal", cveSucursal)
            hsInfo.Add("@numfactura", numFactura)
            hsInfo.Add("@cveEmpresario", idEmpre)
            hsInfo.Add("@prefijo", Prefijo)

            ds = EjecutaSP("spDGI_ultimoStatus", sRES, hsInfo)
            If ds Is Nothing Then
                sRES = sRES.Replace("'", "#")
                Return sRES
            End If

            If ds.tables(0).rows.count = 0 Then
                Return "-1"
            End If

            Dim sHTML As String

            If ds.tables(0).rows(0)("codRes").tostring = "0" Then
                Dim fila As data.dataRow = ds.tables(0).rows(0)

                Dim facturaDGI As String = fila("tipoCFE").ToString & "_" & fila("serie").ToString.trim & format(CDbl(fila("numero")), "000000")
                Dim filePath As String = "C:\Inetpub\wwwroot\uruguay\Out\" & facturaDGI & ".xml"
                Dim urlFile As String = "https://www.ferplatino2.com.mx/uruguay/Out/" & facturaDGI & ".xml"

                If IO.File.Exists(filePath) Then
                    IO.File.Delete(filePath)
                End If

                Escribir_Archivo(fila("xmlRes"), filePath)

                'Escribir PDF
                Dim urlFilPDf As String = ConfigurationManager.AppSettings("Url").ToString & "out/" & facturaDGI & ".pdf"
                Dim sFileOut As String = ConfigurationManager.AppSettings("DirOut").ToString & facturaDGI & ".pdf"

                If fila("tienePDF").ToString = "sitiene" Then
                    Dim pdfData() As Byte
                    pdfData = fila("PDF")
                    IO.File.WriteAllBytes(sFileOut, pdfData)
                Else
                    urlFilPDf = ""
                    sFileOut = ""
                End If

                sHTML = "<table>"
                sHTML &= "<tr>"
                sHTML &= "  <td>"
                sHTML &= "  <b>Factura DGI:</b> " & facturaDGI
                sHTML &= "  <br/><b>Fecha autorizado:</b> " & format(CDate(ds.tables(0).rows(0)("fechaAlta")), "dd/MMMM/yyyy HH:mm").toUpper
                sHTML &= "  <br/> <a class='alink' href='" & fila("linkQR") & "' target='BLANK'>Código QR</a>   "
                sHTML &= "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a class='alink' href='" & urlFile & "' target='BLANK'>Descargar XML</a>   "

                If fila("tienePDF") = "sitiene" Then
                    sHTML &= "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a class='alink' href='" & urlFilPDf & "' target='BLANK'>Descargar PDF</a>   "
                Else
                    sHTML &= "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>No hay PDF generado</b>   "
                End If

                sHTML &= "  </td>"
                sHTML &= "</tr>"
                sHTML &= "</table>"
            Else
                sHTML = "<table>"
                sHTML &= "<tr>"
                sHTML &= "  <td class=TextoError>"
                sHTML &= "  <b>Error:</b> " & ds.tables(0).rows(0)("codRes").tostring & "-" & ds.tables(0).rows(0)("descripcion").tostring.toUpper
                sHTML &= "  <br><b>Fecha:</b> " & format(CDate(ds.tables(0).rows(0)("fechaAlta")), "dd/MMMM/yyyy HH:mm").toUpper
                sHTML &= "  <br><a class='alink' href='javascript: reEnviarTimbrado()'>Clic aqui para re-enviar</a>"
                sHTML &= "  </td>"
                sHTML &= "</tr>"
                sHTML &= "</table>"

            End If


            Return sHTML

        Catch ex As Exception
            Dim sError As String = ex.Message.ToString.Replace("'", "#")
            Return "{'codigo10':400, 'mensaje':'Error[PMGETULTSTS]: " & sError & "'}"
        End Try

    End Function
	
	
	
	{'codigo10':400, 'mensaje':'Error[PMGETULTSTS]: Conversion from type #DBNull# to type #String# is not valid.'}