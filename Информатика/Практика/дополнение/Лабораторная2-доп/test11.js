var Word, Doc;

Word=new ActiveXObject("Word.Application");

Word.Visible=false;
Doc=Word.Documents.Add();
Doc.Content.Bold=1;
Doc.Content.Font.Size=32;
Doc.Content.Text="���������� ���������������� ������ �  Microsoft Word";
Doc.SaveAs("C:\\work\\Test2012.doc");
Word.Application.Quit();
