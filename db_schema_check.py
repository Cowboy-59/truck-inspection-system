import psycopg2
import sys

def check_schema():
    try:
        # Connect to the database
        conn = psycopg2.connect(
            host="pgkanban.wxperts.com",
            user="TCI",
            password="Cowboy",
            database="TCIInspections",
            port=5432
        )
        
        cur = conn.cursor()
        print("Connected to database successfully")

        # Get all tables
        cur.execute("""
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public' 
            ORDER BY table_name;
        """)
        
        tables = cur.fetchall()
        print("\nTables in database:")
        for table in tables:
            print(f"- {table[0]}")

        # Get detailed schema for each table
        for table in tables:
            table_name = table[0]
            print(f"\n\n=== {table_name.upper()} TABLE ===")
            
            cur.execute("""
                SELECT 
                    column_name,
                    data_type,
                    is_nullable,
                    column_default,
                    character_maximum_length
                FROM information_schema.columns 
                WHERE table_name = %s 
                AND table_schema = 'public'
                ORDER BY ordinal_position;
            """, (table_name,))

            columns = cur.fetchall()
            for col in columns:
                column_name, data_type, is_nullable, column_default, max_length = col
                nullable = "(nullable)" if is_nullable == 'YES' else "(not null)"
                length = f"({max_length})" if max_length else ""
                default = f" DEFAULT {column_default}" if column_default else ""
                print(f"  {column_name}: {data_type}{length} {nullable}{default}")

        cur.close()
        conn.close()

    except Exception as e:
        print(f"Database connection error: {e}")

if __name__ == "__main__":
    check_schema()